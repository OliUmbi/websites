package ch.oliumbi.api.endpoints.account.login;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.server.Request;
import ch.oliumbi.api.server.Response;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Autoload
public class Login implements Endpoint<LoginResponse, LoginRequest> {

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
    return "/account/login";
  }

  @Override
  public List<Permission> permissions() {
    return List.of(
        Permission.OLIUMBI_ADMIN
    );
  }

  @Override
  public Response<LoginResponse> handle(Request<LoginRequest> request) {

    System.out.println(request);

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

    return new Response<>(new LoginResponse(request.getBody().getUsername(), "token"));
  }
}
