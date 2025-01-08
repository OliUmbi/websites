package ch.oliumbi.api.endpoints.unclet.review.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.endpoints.unclet.booking.create.BookingCreateRequest;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.shared.SharedCommunicationType;
import ch.oliumbi.api.enums.unclet.UncletBookingStatus;
import ch.oliumbi.api.enums.unclet.UncletReviewStatus;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import ch.oliumbi.api.shared.communication.CommunicationService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ReviewCreate implements Endpoint<ReviewCreateRequest> {

  private final Database database;
  private final CommunicationService communicationService;

  public ReviewCreate(Database database, CommunicationService communicationService) {
    this.database = database;
    this.communicationService = communicationService;
  }

  @Override
  public Method method() {
    return Method.POST;
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
  public Response handle(Request<ReviewCreateRequest> request) {

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO unclet_review (
                      id,
                      status,
                      stars,
                      name,
                      description,
                      date)
            VALUES (
                      :id,
                      :status,
                      :stars,
                      :name,
                      :description,
                      :date)
            """,
        Param.of("id", id),
        Param.of("status", UncletReviewStatus.OPEN),
        Param.of("date", LocalDateTime.now()),
        request.getBody());

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create review.");
    }

    // todo refine
    communicationService.create(SharedCommunicationType.EMAIL, "info@uncle-t.ch", "Neue Bewertung von " + request.getBody().getName(), """
        Eine neue Bewertung ist auf der Webseite gemacht worden.
        Du kannst diese hier bearbeiten: https://admin.uncle-t.ch/review
        """);

    return new MessageResponse(Status.OK, "Successfully created review.");
  }
}
