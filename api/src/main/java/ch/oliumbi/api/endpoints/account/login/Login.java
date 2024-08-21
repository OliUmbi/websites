package ch.oliumbi.api.endpoints.account.login;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Autoload
public class Login implements Endpoint<LoginRequest> {

  private final Database database;

  public Login(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public String route() {
    return "/account/login/:id";
  }

  @Override
  public List<Permission> permissions() {
    return List.of(
        Permission.OLIUMBI_ADMIN
    );
  }

  @Override
  public Response handle(Request<LoginRequest> request) {

    /*
    Optional<List<Map<String, Object>>> result = database.handle(handle ->
        handle.createQuery("""
                SELECT *
                FROM account
                """)
            .mapToMap()
            .list()
    );

    for (Map<String, Object> stringObjectMap : result.get()) {
      System.out.println(stringObjectMap);
    }

    return new JsonResponse(Status.OK, new LoginResponse(request.getBody().getUsername(), "token"));
     */
    return null;
  }
}
