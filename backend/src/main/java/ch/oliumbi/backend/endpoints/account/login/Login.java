package ch.oliumbi.backend.endpoints.account.login;

import java.util.Optional;
import org.eclipse.jetty.server.Response;

/*
@Autoload
public class Login implements Endpoint {

  private final Database database;

  public Login(Database database) {
    this.database = database;
  }

  private String method() {
    return Method.GET;
  }

  public String path() {
    return "/account/login";
  }

  public Response<LoginResponse> handle(Request<LoginRequest> request) {

    Optional<String> password = database.createQuery("")
        .bind("username": request.body.getUsername())
        .mapTo(String.class)
        .findOne();

    if (password.isEmpty()) {
      return Response.error("User not found");
    }

    if (password.equals(request.body.getPassword)) {

    }
  }
}
*/
