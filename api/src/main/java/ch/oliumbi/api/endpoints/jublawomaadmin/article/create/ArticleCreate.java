package ch.oliumbi.api.endpoints.jublawomaadmin.article.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
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
    return List.of("/jublawoma-admin/article");
  }

  @Override
  public List<Permission> permissions() {
    return List.of(Permission.JUBLAWOMA_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    UUID id = UUID.randomUUID();

    // todo implement

    return new IdMessageResponse(Status.OK, "Successfully created article", id);
  }
}
