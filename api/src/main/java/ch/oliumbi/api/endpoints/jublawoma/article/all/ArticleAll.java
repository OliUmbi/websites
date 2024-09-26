package ch.oliumbi.api.endpoints.jublawoma.article.all;

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
    return List.of("/jublawoma/article");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Integer start;
    Integer size;
    try {
      start = start(request.getParameters());
      size = size(request.getParameters());
    } catch (Exception e) {
      return new MessageResponse(Status.BAD_REQUEST, "Start and size are invalid.");
    }

    Optional<List<ArticleAllResponse>> articleAllResponses = database.query(ArticleAllResponse.class, """
        SELECT  id,
                image_id,
                title,
                description,
                author,
                published
        FROM    jublawoma_article
        WHERE   visible = TRUE
        ORDER BY published DESC
        OFFSET  :start
        LIMIT   :size
        INTO    id,
                imageId,
                title,
                description,
                author,
                published
        """,
        Param.of("start", start),
        Param.of("size", size));

    if (articleAllResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "News-Beiträge konnten nicht geladen werden.");
    }

    Optional<List<Row>> rows = database.query("""
        SELECT  COUNT(*)
        FROM    jublawoma_article
        WHERE   visible = TRUE
        """);

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "News-Beiträge konnten nicht geladen werden.");
    }

    Long total = rows.get().getFirst().getLong("count");

    return new PaginationResponse(Status.OK, articleAllResponses.get(), total);
  }

  private Integer start(Parameters parameters) throws Exception {
    Optional<String> parameter = parameters.get("start");

    if (parameter.isEmpty()) {
      throw new Exception("Start missing.");
    }

    int start = Integer.parseInt(parameter.get());

    if (start < 0) {
      throw new Exception("Start is negative.");
    }

    return start;
  }

  private Integer size(Parameters parameters) throws Exception {
    Optional<String> parameter = parameters.get("size");

    if (parameter.isEmpty()) {
      throw new Exception("Size missing.");
    }

    int size = Integer.parseInt(parameter.get());

    if (size < 1 || size > 30) {
      throw new Exception("Start is out of allowed range.");
    }

    return size;
  }
}
