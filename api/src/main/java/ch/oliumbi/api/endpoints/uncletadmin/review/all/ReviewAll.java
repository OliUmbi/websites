package ch.oliumbi.api.endpoints.uncletadmin.review.all;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.PaginationResponse;
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
    return List.of("/unclet-admin/review");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of(SharedAccountPermissionPermission.UNCLET_ADMIN);
  }

  @Override
  public Response handle(Request<Void> request) {
    Optional<Integer> start = request.getParameters().start();
    if (start.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid start.");
    }

    Optional<Integer> size = request.getParameters().size(30);
    if (size.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid size.");
    }

    Optional<List<ReviewAllResponse>> bookingAllResponses = database.query(ReviewAllResponse.class, """
        SELECT  id,
                status,
                stars,
                name,
                date
        FROM    unclet_review
        ORDER BY CASE status
                WHEN 'PUBLIC' THEN 1
                WHEN 'OPEN' THEN 2
                WHEN 'REJECTED' THEN 3
                ELSE 4
                END,
                date DESC
        OFFSET  :start
        LIMIT   :size
        INTO    id,
                status,
                stars,
                name,
                date
        """,
        Param.of("start", start.get()),
        Param.of("size", size.get()));

    if (bookingAllResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load reviews.");
    }

    Optional<List<Row>> rows = database.query("""
        SELECT  COUNT(*)
        FROM    unclet_review
        """);

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load reviews.");
    }

    Long total = rows.get().getFirst().getLong("count");

    return new PaginationResponse(Status.OK, bookingAllResponses.get(), total);
  }
}
