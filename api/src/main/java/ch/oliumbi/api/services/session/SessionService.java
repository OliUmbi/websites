package ch.oliumbi.api.services.session;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Headers;
import ch.oliumbi.api.server.response.MessageResponse;
import java.util.Optional;

@Autoload
public class SessionService {

  private final Database database;

  public SessionService(Database database) {
    this.database = database;
  }

  public Optional<Session> load(Headers headers) {

    Optional<Header> authentication = headers.get("Authentication");

    if (authentication.isEmpty()) {
      return Optional.empty();
    }

    session = optionalSession.get();

    // todo move

    if (!session.getPermissions().containsAll(endpoint.permissions())) {
      return new MessageResponse(Status.FORBIDDEN, "Missing permission.");
    }

    Optional<Session> session = database.querySingle("""
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

    return session;
  }
}
