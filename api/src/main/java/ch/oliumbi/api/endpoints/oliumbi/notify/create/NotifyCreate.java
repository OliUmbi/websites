package ch.oliumbi.api.endpoints.oliumbi.notify.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class NotifyCreate implements Endpoint<NotifyCreateRequest> {

  private final Database database;

  public NotifyCreate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of("/oliumbi/notify");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<NotifyCreateRequest> request) {

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO oliumbi_notify (
                      id,
                      email)
            VALUES (
                      :id,
                      :email)
            """,
        Param.of("id", id),
        request.getBody());

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create notification.");
    }

    return new MessageResponse(Status.OK, "Successfully created notification.");
  }
}
