package ch.oliumbi.api.endpoints.shared.account.session.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.cryptography.Cryptography;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@Autoload
public class AccountSessionCreate implements Endpoint<AccountSessionCreateRequest> {

  private final Database database;
  private final Cryptography cryptography;

  public AccountSessionCreate(Database database, Cryptography cryptography) {
    this.database = database;
    this.cryptography = cryptography;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of(
        "/jublawoma-admin/account/session",
        "/unclet-admin/account/session"
    );
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<AccountSessionCreateRequest> request) {

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    Optional<Row> account = database.querySingle("""
            SELECT  id,
                    password
            FROM    shared_account
            WHERE   name = :name
            LIMIT   1
            """,
        request.getBody());

    if (account.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Failed to authenticate.");
    }

    if (!cryptography.matches(request.getBody().getPassword(), account.get().getString("password"))) {
      return new MessageResponse(Status.BAD_REQUEST, "Failed to authenticate.");
    }

    UUID id = account.get().getUUID("id");
    String token = generateToken();

    Optional<Integer> session = database.update("""
            INSERT INTO shared_account_session (
                        account_id,
                        token,
                        expires)
            VALUES (
                        :accountId,
                        :token,
                        :expires)
            """,
        Param.of("accountId", id),
        Param.of("token", token),
        Param.of("expires", LocalDateTime.now().plusHours(8)));

    if (session.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create session.");
    }

    Optional<List<Row>> rows = database.query("""
            SELECT  permission
            FROM    shared_account_permission
            WHERE   account_id = :accountId
            """,
        Param.of("accountId", id));

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create session.");
    }

    List<SharedAccountPermissionPermission> permissions = rows.get().stream()
        .map(row -> row.getEnum("permission", SharedAccountPermissionPermission.class))
        .toList();

    return new JsonResponse(Status.OK, new AccountSessionCreateResponse(id, token, permissions));
  }

  private String generateToken() {
    Random random = new Random();
    String donor = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    StringBuilder token = new StringBuilder(10);

    for (int i = 0; i < 10; i++) {
      token.append(donor.charAt(random.nextInt(donor.length())));
    }

    return token.toString();
  }
}
