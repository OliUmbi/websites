package ch.oliumbi.backend.endpoints.account.login;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.database.Database;
import ch.oliumbi.backend.enums.Permission;
import ch.oliumbi.backend.server.Endpoint;
import ch.oliumbi.backend.enums.Method;
import ch.oliumbi.backend.server.Request;
import ch.oliumbi.backend.server.Response;
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

    return null;
  }
}
