package ch.oliumbi.api.endpoints.oliumbiadmin.article.notify;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.shared.SharedCommunicationType;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import ch.oliumbi.api.shared.communication.CommunicationService;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ArticleNotify implements Endpoint<Void> {

  private final Database database;
  private final CommunicationService communicationService;

  public ArticleNotify(Database database, CommunicationService communicationService) {
    this.database = database;
    this.communicationService = communicationService;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of("/oliumbi-admin/article/:id/notify");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.OLIUMBI_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    Optional<Row> article = database.querySingle("""
            SELECT  title,
                    description,
                    visible
            FROM    oliumbi_article
            WHERE   id = :id
            """,
        Param.of("id", id.get()));

    if (article.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load article.");
    }

    if (!article.get().getBoolean("visible")) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Article is not visible");
    }

    Optional<List<Row>> emails = database.query("""
        SELECT  email
        FROM    oliumbi_notify
        """);

    if (emails.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load notifies.");
    }

    for (Row email : emails.get()) {
      communicationService.create(SharedCommunicationType.EMAIL, email.getString("email"),
          String.format("Neuer Beitrag \"%s\" auf OliUmbi", article.get().getString("title")),
          String.format("""
              Hallo, ich habe einen neuen Beitrag hochzuladen!
              
              Link: https://oliumbi.ch/article/%s
              
              Wie immer gibt es kleine Einblicke in meinen Alltag in Kalifornien – diesmal:
              "%s"
              
              Liebe Grüsse
              Oliver
              """, id.get(), article.get().getString("description")));
    }

    return new MessageResponse(Status.OK, "Successfully notified article.");
  }
}
