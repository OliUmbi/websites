package ch.oliumbi.api.endpoints.uncletadmin.review.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.unclet.UncletReviewStatus;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.IdMessageResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ReviewCreate implements Endpoint<Void> {

  private final Database database;

  public ReviewCreate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
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
        Param.of("stars", 5),
        Param.of("name", "Name"),
        Param.of("description", "Beschreibung"),
        Param.of("date", LocalDateTime.now()));

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create review.");
    }

    return new IdMessageResponse(Status.OK, "Successfully created review.", id);
  }
}
