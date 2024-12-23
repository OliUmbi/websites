package ch.oliumbi.api.shared.communication;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.shared.SharedCommunicationStatus;
import ch.oliumbi.api.enums.shared.SharedCommunicationType;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class CommunicationService {

  private final Database database;

  public CommunicationService(Database database) {
    this.database = database;
  }

  public Optional<UUID> create(SharedCommunicationType type, String recipient, String title, String body) {

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO shared_communication (
                      id,
                      type,
                      status,
                      attempts,
                      recipient,
                      title,
                      body)
            VALUES (
                      :id,
                      :type,
                      :status,
                      :attempts,
                      :recipient,
                      :title,
                      :body)
            """,
        Param.of("id", id),
        Param.of("type", type),
        Param.of("status", SharedCommunicationStatus.OPEN),
        Param.of("attempts", 0),
        Param.of("recipient", recipient),
        Param.of("title", title),
        Param.of("body", body));

    if (create.isEmpty()) {
      return Optional.empty();
    }

    return Optional.of(id);
  }
}
