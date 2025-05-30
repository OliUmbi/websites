package ch.oliumbi.api.endpoints.jublawoma.donation.all;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
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

@Autoload
public class DonationAll implements Endpoint<Void> {

  private final Database database;

  public DonationAll(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of("/jublawoma/donation");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {
    Optional<DonationAllResponse> donationResponse = database.querySingle(DonationAllResponse.class, """
        SELECT  id,
                title,
                description,
                contact,
                start,
                finish
        FROM    jublawoma_donation
        WHERE   start < current_timestamp
        AND     finish > current_timestamp
        LIMIT   1
        INTO    id,
                title,
                description,
                contact,
                start,
                finish
        """);

    if (donationResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load donation.");
    }

    Optional<List<DonationAllProductResponse>> donationProductResponses = database.query(DonationAllProductResponse.class, """
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
            WHERE   donation_id = :id
            INTO    id,
                    name,
                    quantity,
                    donated,
                    step,
                    unit,
                    note
            """,
        donationResponse.get());

    if (donationProductResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to load donation products.");
    }

    donationResponse.get().setProducts(donationProductResponses.get());

    return new JsonResponse(Status.OK, donationResponse.get());
  }
}
