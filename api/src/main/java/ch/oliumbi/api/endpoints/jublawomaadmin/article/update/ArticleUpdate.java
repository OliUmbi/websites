package ch.oliumbi.api.endpoints.jublawomaadmin.article.update;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;

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
    return List.of("/jublawoma-admin/article/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.JUBLAWOMA_ADMIN);
  }

  @Override
  public Response handle(Request<ArticleUpdateRequest> request) {

    // todo implement

    return new MessageResponse(Status.OK, "Successfully updated article.");
  }
}
