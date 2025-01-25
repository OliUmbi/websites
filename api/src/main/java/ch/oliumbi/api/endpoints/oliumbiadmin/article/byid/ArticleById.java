package ch.oliumbi.api.endpoints.oliumbiadmin.article.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
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
public class ArticleById implements Endpoint<Void> {

  private final Database database;

  public ArticleById(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/oliumbi-admin/article/:id");
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

    Optional<ArticleByIdResponse> articleByIdResponse = database.querySingle(ArticleByIdResponse.class, """
        SELECT  id,
                image_id,
                title,
                description,
                author,
                published,
                markdown,
                visible
        FROM    oliumbi_article
        WHERE   id = :id
        INTO    id,
                imageId,
                title,
                description,
                author,
                published,
                markdown,
                visible
        """,
        Param.of("id", id.get()));

    if (articleByIdResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load article.");
    }

    return new JsonResponse(Status.OK, articleByIdResponse.get());
  }
}
