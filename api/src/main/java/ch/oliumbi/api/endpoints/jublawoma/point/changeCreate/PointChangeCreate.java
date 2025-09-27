package ch.oliumbi.api.endpoints.jublawoma.point.changeCreate;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class PointChangeCreate implements Endpoint<PointChangeCreateRequest> {

  private final Database database;

  public PointChangeCreate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma/point/:id/change");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<PointChangeCreateRequest> request) {

    Optional<UUID> pointId = request.getPathVariables().getUUID("id");

    if (pointId.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO jublawoma_point_change (
                      id,
                      point_id,
                      change,
                      created)
            VALUES (
                      :id,
                      :pointId,
                      :change,
                      CURRENT_TIMESTAMP)
            """,
        Param.of("id", id),
        Param.of("pointId", pointId.get()),
        request.getBody());

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create point.");
    }

    return new IdMessageResponse(Status.OK, "Successfully created point.", id);
  }
}
