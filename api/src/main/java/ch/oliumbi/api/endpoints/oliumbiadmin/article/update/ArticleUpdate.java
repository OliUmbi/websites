package ch.oliumbi.api.endpoints.oliumbiadmin.article.update;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ArticleUpdate implements Endpoint<ArticleUpdateRequest> {

  private final Database database;

  public ArticleUpdate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.PUT;
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
  public Response handle(Request<ArticleUpdateRequest> request) {

    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    Optional<Integer> update = database.update("""
            UPDATE  oliumbi_article
            SET     image_id = :imageId,
                    title = :title,
                    description = :description,
                    author = :author,
                    published = :published,
                    markdown = :markdown,
                    visible = :visible
            WHERE   id = :id
            """,
        request.getBody(),
        Param.of("id", id.get()));

    if (update.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to update article.");
    }

    return new MessageResponse(Status.OK, "Successfully updated article.");
  }
}
