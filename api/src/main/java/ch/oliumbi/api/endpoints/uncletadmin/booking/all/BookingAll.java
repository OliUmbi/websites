package ch.oliumbi.api.endpoints.uncletadmin.booking.all;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.endpoints.jublawomaadmin.article.all.ArticleAllResponse;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Parameters;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.PaginationResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;

@Autoload
public class BookingAll implements Endpoint<Void> {

  private final Database database;

  public BookingAll(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/unclet-admin/booking");
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

    Optional<List<BookingAllResponse>> bookingAllResponses = database.query(BookingAllResponse.class, """
        SELECT  id,
                status,
                name,
                date
        FROM    unclet_booking
        ORDER BY CASE status
                WHEN 'OPEN' THEN 1
                WHEN 'IN_PROGRESS' THEN 2
                WHEN 'DONE' THEN 3
                WHEN 'REJECTED' THEN 4
                ELSE 5
                END,
                date
        OFFSET  :start
        LIMIT   :size
        INTO    id,
                status,
                name,
                date
        """,
        Param.of("start", start.get()),
        Param.of("size", size.get()));

    if (bookingAllResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load bookings.");
    }

    Optional<List<Row>> rows = database.query("""
        SELECT  COUNT(*)
        FROM    unclet_booking
        """);

    if (rows.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load bookings.");
    }

    Long total = rows.get().getFirst().getLong("count");

    return new PaginationResponse(Status.OK, bookingAllResponses.get(), total);
  }
}
