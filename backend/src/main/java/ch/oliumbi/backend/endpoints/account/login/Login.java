package ch.oliumbi.backend.endpoints.account.login;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.autoload.Autoloader;
import ch.oliumbi.backend.confguration.Configuration;
import ch.oliumbi.backend.server.Endpoint;
import ch.oliumbi.backend.server.Method;
import ch.oliumbi.backend.server.Request;
import ch.oliumbi.backend.server.Response;
import ch.oliumbi.backend.server.Server;
import java.util.Optional;

@Autoload
public class Login implements Endpoint<LoginResponse, LoginRequest> {

  /*
  private final Database database;

  public Login(Database database) {
    this.database = database;
  }
  */

  public Login(Configuration configuration) {
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
  public Response<LoginResponse> handle(Request<LoginRequest> request) {

    /*
    Optional<String> password = database.createQuery("")
        .bind("username": request.body.getUsername())
        .mapTo(String.class)
        .findOne();

    if (password.isEmpty()) {
      return Response.error("User not found");
    }

    if (password.equals(request.body.getPassword)) {

    }

     */

    return null;
  }
}
