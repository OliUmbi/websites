package ch.oliumbi.api.endpoints.account.login;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Autoload
public class Login implements Endpoint<LoginRequest> {

  private final Database database;

  public Login(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public String route() {
    return "/account/login";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<LoginRequest> request) {

    Optional<Row> account = database.querySingle("""
            SELECT  account_id,
                    password
            FROM    account
            WHERE   firstname = :username
            LIMIT   1
            """,
        Param.of("username", request.getBody().getUsername()));

    if (account.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Login failed.");
    }

    if (!account.get().getString("password").equals(request.getBody().getPassword())) {
      return new MessageResponse(Status.BAD_REQUEST, "Login failed.");
    }

    String donor = "QWERTZUIOPASDFGHJKLYXCVBNM";

    Random random = new Random();

    String token = "";

    for (int i = 0; i < 5; i++) {
      token += donor.charAt(random.nextInt(donor.length()));
    }

    database.update("""
        INSERT INTO account_session (
                    account_id,
                    token,
                    expires)
        VALUES (
                    :accountId,
                    :token,
                    :expires)
        """,
        Param.of("accountId", account.get().getUUID("account_id")),
        Param.of("token", token),
        Param.of("expires", LocalDateTime.now().plusHours(8)));

    return new JsonResponse(Status.OK, new LoginResponse(token));
  }
}
