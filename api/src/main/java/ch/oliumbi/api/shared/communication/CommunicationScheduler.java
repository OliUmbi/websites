package ch.oliumbi.api.shared.communication;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.shared.SharedCommunicationStatus;
import ch.oliumbi.api.server.Scheduler;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class CommunicationScheduler extends Scheduler {

  private static final Logger LOGGER = LoggerFactory.getLogger(CommunicationScheduler.class);
  private static final int MAX_RETRIES = 3;

  private final Database database;
  private final CommunicationEmail communicationEmail;

  public CommunicationScheduler(Database database, CommunicationEmail communicationEmail) {
    super(1);
    this.database = database;
    this.communicationEmail = communicationEmail;
  }

  @Override
  protected void scheduled() {

    Optional<List<Communication>> communications = database.query(Communication.class, """
            SELECT  id,
                    type,
                    status,
                    attempts,
                    recipient,
                    title,
                    body
            FROM    shared_communication
            WHERE   status = :status
            INTO    id,
                    type,
                    status,
                    attempts,
                    recipient,
                    title,
                    body
            """,
        Param.of("status", SharedCommunicationStatus.OPEN));

    if (communications.isEmpty()) {
      LOGGER.error("Failed to load communications.");
      return;
    }

    for (Communication communication : communications.get()) {
      database.update("""
              UPDATE  shared_communication
              SET     status = :status
              WHERE   id = :id
              """,
          Param.of("id", communication.getId()),
          Param.of("status", SharedCommunicationStatus.IN_PROGRESS));

      boolean sent = switch (communication.getType()) {
        case EMAIL -> communicationEmail.send(communication);
        default -> false;
      };

      int attempts = communication.getAttempts() + 1;
      SharedCommunicationStatus status;

      if (sent) {
        status = SharedCommunicationStatus.SUCCESS;
      } else if (attempts > MAX_RETRIES) {
        status = SharedCommunicationStatus.ERROR;
      } else {
        status = SharedCommunicationStatus.OPEN;
      }

      database.update("""
              UPDATE  shared_communication
              SET     status = :status,
                      attempts = :attempts
              WHERE   id = :id
              """,
          Param.of("id", communication.getId()),
          Param.of("status", status),
          Param.of("attempts", attempts));
    }
  }
}
