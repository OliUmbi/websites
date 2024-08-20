package ch.oliumbi.api.endpoints;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.server.request.Session;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class SessionService {

  private final Database database;

  public SessionService(Database database) {
    this.database = database;
  }

  public Optional<Session> getSession(String authentication) {

    List<Session> session = database.query("""
        SELECT  as.account_id,
                as.token,
                ap.permission
        FROM    account_session as
        INNER JOIN account_permission USING account_id
        WHERE   as.expires > current_timestamp
        LIMIT   1
        """,
        Session.class,
        authentication);

    return Optional.of(new Session(authentication, UUID.randomUUID(), List.of(Permission.JUBLAWOMA_ADMIN, Permission.OLIUMBI_ADMIN)));
  }
}
