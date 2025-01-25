package ch.oliumbi.api.endpoints.oliumbiadmin.article.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ArticleCreate implements Endpoint<Void> {

  private final Database database;

  public ArticleCreate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of("/oliumbi-admin/article");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.OLIUMBI_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO oliumbi_article (
                      id,
                      title,
                      description,
                      author,
                      published,
                      markdown,
                      visible)
            VALUES (
                      :id,
                      :title,
                      :description,
                      :author,
                      :published,
                      :markdown,
                      :visible)
            """,
        Param.of("id", id),
        Param.of("title", "New Article"),
        Param.of("description", ""),
        Param.of("author", "Oliver Umbricht"),
        Param.of("published", LocalDateTime.now()),
        Param.of("markdown", "[]"),
        Param.of("visible", false));

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create article.");
    }

    return new IdMessageResponse(Status.OK, "Successfully created article.", id);
  }
}
