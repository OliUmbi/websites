package ch.oliumbi.api.endpoints.oliumbiadmin.article.notify;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
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

    Optional<List<Row>> rows = database.query("""
        SELECT  email
        FROM    oliumbi_notify
        """);

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load notifies.");
    }

    // todo rework
    for (Row row : rows.get()) {
      communicationService.create(SharedCommunicationType.EMAIL, row.getString("email"),
          "[OliUmbi] Neuer Blog-Artikel",
          String.format("""
          https://oliumbi.ch/article/%s
          """, id));
    }

    return new MessageResponse(Status.OK, "Successfully notified article.");
  }
}
