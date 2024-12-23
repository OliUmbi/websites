package ch.oliumbi.api.endpoints.unclet.booking.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.shared.SharedCommunicationType;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import ch.oliumbi.api.shared.communication.CommunicationService;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class BookingCreate implements Endpoint<BookingCreateRequest> {

  private final Database database;
  private final CommunicationService communicationService;

  public BookingCreate(Database database, CommunicationService communicationService) {
    this.database = database;
    this.communicationService = communicationService;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public List<String> routes() {
    return List.of("/unclet/booking");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<BookingCreateRequest> request) {

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
            INSERT INTO jublawoma_article (
                      id,
                      title,
                      description,
                      author,
                      published,
                      markdown,
                      visible)
            VALUES (
                      :id,
                      :title,
                      :description,
                      :author,
                      :published,
                      :markdown,
                      :visible)
            """,
        Param.of("id", id),
        Param.of("title", "Neuer News-Artikel"),
        Param.of("description", ""),
        Param.of("author", ""),
        Param.of("published", LocalDateTime.now()),
        Param.of("markdown", "[]"),
        Param.of("visible", false));

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create booking.");
    }

    // todo refine
    communicationService.create(SharedCommunicationType.EMAIL, "info@uncle-t.ch", "Neue Buchungsanfrage", "admin.uncle-t.ch");

    return new IdMessageResponse(Status.OK, "Successfully created booking.", id);
  }
}
