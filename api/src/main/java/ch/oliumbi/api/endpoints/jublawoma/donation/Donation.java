package ch.oliumbi.api.endpoints.jublawoma.donation;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.JsonResponse;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import jdk.jfr.Enabled;

@Autoload
public class Donation implements Endpoint<Void> {

  private final Database database;

  public Donation(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public String route() {
    return "/jublawoma/donation";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {
    // todo implement

    Optional<DonationResponse> donationResponse = database.querySingle(DonationResponse.class, """
        SELECT  id,
                title,
                description,
                contact,
                start,
                finish
        FROM    jublawoma_donation
        WHERE   finish > current_timestamp
        LIMIT   1
        INTO    id,
                title,
                description,
                contact,
                start,
                finish
        """);

    if (donationResponse.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Keine aktive Spende gefunden.");
    }

    Optional<List<DonationProductResponse>> donationProductResponses = database.query(DonationProductResponse.class, """
            SELECT  id,
                    name,
                    quantity,
                    COALESCE ((
                        SELECT  SUM (quantity)
                        FROM    jublawoma_donation_product_donor
                        WHERE   donation_product_id = jublawoma_donation_product.id
                    ), 0),
                    unit
            FROM    jublawoma_donation_product
            WHERE   donation_id = :id
            INTO    id,
                    name,
                    quantity,
                    donated,
                    unit
            """,
        donationResponse.get());

    if (donationProductResponses.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Keine zu spendene Produkte gefunden.");
    }

    donationResponse.get().setProducts(donationProductResponses.get());

    return new JsonResponse(Status.OK, donationResponse.get());
  }
}
