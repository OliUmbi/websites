package ch.oliumbi.api.endpoints.jublawoma.point.changeBySpace;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;

@Autoload
public class PointChangeBySpace implements Endpoint<Void> {

  private final Database database;

  public PointChangeBySpace(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma/point/:space/change");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<String> space = request.getPathVariables().getString("space");

    if (space.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid space.");
    }

    Optional<List<PointChangeBySpaceResponse>> pointBySpaceChangeResponses = database.query(PointChangeBySpaceResponse.class, """
            SELECT  jpc.id,
                    jp.name,
                    jpc.change,
                    jpc.created
            FROM    jublawoma_point_change jpc
            LEFT JOIN jublawoma_point jp ON (jpc.point_id = jp.id)
            WHERE   jp.space = :space
            ORDER BY jpc.created DESC
            LIMIT   20
            INTO    id,
                    name,
                    change,
                    created
            """,
        Param.of("space", space.get()));

    if (pointBySpaceChangeResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load point changes.");
    }

    return new JsonResponse(Status.OK, pointBySpaceChangeResponses.get());
  }
}
