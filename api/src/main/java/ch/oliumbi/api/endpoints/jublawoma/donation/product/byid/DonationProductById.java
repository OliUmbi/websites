package ch.oliumbi.api.endpoints.jublawoma.donation.product.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class DonationProductById implements Endpoint<Void> {

  private final Database database;

  public DonationProductById(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma/donation/product/:id");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<String> id = request.getPathVariables().get("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Spende nicht gefunden.");
    }

    Optional<DonationProductByIdResponse> donationProductResponse = database.querySingle(DonationProductByIdResponse.class, """
            SELECT  id,
                    name,
                    quantity,
                    COALESCE ((
                        SELECT  SUM (quantity)
                        FROM    jublawoma_donation_product_donor
                        WHERE   donation_product_id = jublawoma_donation_product.id
                    ), 0),
                    step,
                    unit,
                    note
            FROM    jublawoma_donation_product
            WHERE   id = :id
            LIMIT   1
            INTO    id,
                    name,
                    quantity,
                    donated,
                    step,
                    unit,
                    note
            """,
        Param.of("id", UUID.fromString(id.get())));

    if (donationProductResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Spende nicht gefunden.");
    }

    return new JsonResponse(Status.OK, donationProductResponse.get());
  }
}
