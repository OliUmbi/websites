package ch.oliumbi.api.endpoints.jublawomaadmin.article.all;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Parameters;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.PaginationResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;

@Autoload
public class ArticleAll implements Endpoint<Void> {

  private final Database database;

  public ArticleAll(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma-admin/article");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.JUBLAWOMA_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<Integer> start = request.getParameters().start();
    if (start.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid start.");
    }

    Optional<Integer> size = request.getParameters().size(30);
    if (size.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid size.");
    }

    Optional<List<ArticleAllResponse>> articleAllResponses = database.query(ArticleAllResponse.class, """
        SELECT  id,
                title,
                author,
                published,
                visible
        FROM    jublawoma_article
        ORDER BY published DESC
        OFFSET  :start
        LIMIT   :size
        INTO    id,
                title,
                author,
                published,
                visible
        """,
        Param.of("start", start.get()),
        Param.of("size", size.get()));

    if (articleAllResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load articles.");
    }

    Optional<List<Row>> rows = database.query("""
        SELECT  COUNT(*)
        FROM    jublawoma_article
        """);

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load articles.");
    }

    Long total = rows.get().getFirst().getLong("count");

    return new PaginationResponse(Status.OK, articleAllResponses.get(), total);
  }
}
