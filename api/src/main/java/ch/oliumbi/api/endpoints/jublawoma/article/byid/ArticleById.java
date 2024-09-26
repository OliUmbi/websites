package ch.oliumbi.api.endpoints.jublawoma.article.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
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
    return List.of("/jublawoma/article/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "News-Beitrag nicht gefunden.");
    }

    Optional<ArticleByIdResponse> articleByIdResponse = database.querySingle(ArticleByIdResponse.class, """
        SELECT  id,
                image_id,
                title,
                description,
                author,
                published,
                markdown
        FROM    jublawoma_article
        WHERE   id = :id
        AND     visible = TRUE
        LIMIT   1
        INTO    id,
                imageId,
                title,
                description,
                author,
                published,
                markdown
        """,
        Param.of("id", id.get()));

    if (articleByIdResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "News-Beitrag konnten nicht geladen werden.");
    }

    return new JsonResponse(Status.OK, articleByIdResponse.get());
  }
}
