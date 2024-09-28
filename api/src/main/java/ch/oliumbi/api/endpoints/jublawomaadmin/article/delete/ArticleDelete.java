package ch.oliumbi.api.endpoints.jublawomaadmin.article.delete;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.endpoints.jublawomaadmin.article.byid.ArticleByIdResponse;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ArticleDelete implements Endpoint<Void> {

  private final Database database;

  public ArticleDelete(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.DELETE;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma-admin/article/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.JUBLAWOMA_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<String> id = request.getPathVariables().get("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Artikel nicht gefunden.");
    }

    Optional<Integer> delete = database.update("""
            DELETE FROM jublawoma_article
            WHERE   id = :id
            """,
        Param.of("id", UUID.fromString(id.get())));


    if (delete.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "News-Beitrag konnten nicht gelöscht werden.");
    }

    return new MessageResponse(Status.OK, "News-Beitrag wurde erfolgreich gelöscht.");
  }
}