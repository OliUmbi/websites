package ch.oliumbi.api.endpoints.uncletadmin.review.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.endpoints.uncletadmin.booking.byid.BookingByIdResponse;
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
import java.util.UUID;

@Autoload
public class ReviewById implements Endpoint<Void> {

  private final Database database;

  public ReviewById(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/unclet-admin/review/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.UNCLET_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    Optional<ReviewByIdResponse> reviewByIdResponse = database.querySingle(ReviewByIdResponse.class, """
        SELECT  id,
                status,
                stars,
                name,
                description,
                date
        FROM    unclet_review
        WHERE   id = :id
        INTO    id,
                status,
                stars,
                name,
                description,
                date
        """,
        Param.of("id", id.get()));

    if (reviewByIdResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load review.");
    }

    return new JsonResponse(Status.OK, reviewByIdResponse.get());
  }
}
