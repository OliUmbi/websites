package ch.oliumbi.api.endpoints.jublawoma.point.bySpace;

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
public class PointBySpace implements Endpoint<Void> {

  private final Database database;

  public PointBySpace(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma/point/:space");
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

    Optional<List<PointBySpaceResponse>> pointBySpaceResponses = database.query(PointBySpaceResponse.class, """
            SELECT  jp.id,
                    jp.name,
                    jp.code,
                    COALESCE(SUM(jpc.change), 0)
            FROM    jublawoma_point jp
            LEFT JOIN jublawoma_point_change jpc ON (jp.id = jpc.point_id)
            WHERE   jp.space = :space
            GROUP BY jp.id, jp.name, jp.code
            ORDER BY jp.name
            INTO    id,
                    name,
                    code,
                    points
            """,
        Param.of("space", space.get()));

    if (pointBySpaceResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load point.");
    }

    return new JsonResponse(Status.OK, pointBySpaceResponses.get());
  }
}
