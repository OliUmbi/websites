package ch.oliumbi.api.endpoints.uncletadmin.booking.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.database.Row;
import ch.oliumbi.api.endpoints.jublawomaadmin.article.byid.ArticleByIdResponse;
import ch.oliumbi.api.endpoints.uncletadmin.booking.all.BookingAllResponse;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.PaginationResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class BookingById implements Endpoint<Void> {

  private final Database database;

  public BookingById(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/unclet-admin/booking/:id");
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

    Optional<BookingByIdResponse> bookingByIdResponse = database.querySingle(BookingByIdResponse.class, """
        SELECT  id,
                status,
                name,
                email,
                date,
                location,
                people,
                note
        FROM    unclet_booking
        WHERE   id = :id
        INTO    id,
                status,
                name,
                email,
                date,
                location,
                people,
                note
        """,
        Param.of("id", id.get()));

    if (bookingByIdResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load booking.");
    }

    return new JsonResponse(Status.OK, bookingByIdResponse.get());
  }
}
