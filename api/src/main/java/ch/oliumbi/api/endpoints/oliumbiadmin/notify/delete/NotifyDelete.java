package ch.oliumbi.api.endpoints.oliumbiadmin.notify.delete;

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
public class NotifyDelete implements Endpoint<Void> {

  private final Database database;

  public NotifyDelete(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.DELETE;
  }

  @Override
  public List<String> routes() {
    return List.of("/oliumbi-admin/notify/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.OLIUMBI_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    Optional<Integer> delete = database.update("""
            DELETE FROM oliumbi_notify
            WHERE   id = :id
            """,
        Param.of("id", id.get()));


    if (delete.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to delete notify.");
    }

    return new MessageResponse(Status.OK, "Successfully deleted notify.");
  }
}
