package ch.oliumbi.api.database;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import java.util.Optional;
import org.jdbi.v3.core.HandleCallback;
import org.jdbi.v3.core.Jdbi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Database {

  public static final Logger LOGGER = LoggerFactory.getLogger(Database.class);

  private final Jdbi jdbi;

  public Database(Configuration configuration) {
    this.jdbi = Jdbi.create(configuration.string("database.url"), configuration.string("database.username"), configuration.string("database.password"));
  }

  public <T> Optional<T> handle(HandleCallback<T, Exception> callback) {
    try {
      return Optional.of(jdbi.withHandle(callback));
    } catch (Exception e) {
      LOGGER.error("Exception in database handle", e);
      return Optional.empty();
    }
  }
}
