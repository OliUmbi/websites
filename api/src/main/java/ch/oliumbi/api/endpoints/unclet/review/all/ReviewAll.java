package ch.oliumbi.api.endpoints.unclet.review.all;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.unclet.UncletReviewStatus;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;

@Autoload
public class ReviewAll implements Endpoint<Void> {

  private final Database database;

  public ReviewAll(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/unclet/review");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<List<ReviewAllResponse>> reviewAllResponses = database.query(ReviewAllResponse.class, """
        SELECT  id,
                stars,
                name,
                description,
                date
        FROM    unclet_review
        WHERE   status = CAST(:status as UNCLET_REVIEW_STATUS)
        ORDER BY date DESC
        INTO    id,
                stars,
                name,
                description,
                date
        """,
        Param.of("status", UncletReviewStatus.PUBLIC));

    if (reviewAllResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load reviews.");
    }

    return new JsonResponse(Status.OK, reviewAllResponses.get());
  }
}
