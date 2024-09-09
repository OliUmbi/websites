package ch.oliumbi.api.endpoints.jublawoma.donation;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.endpoints.jublawoma.donation.responses.DonationProductResponse;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
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
  public String route() {
    return "/jublawoma/donation/product/:id";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {

    Optional<String> id = request.getPathVariables().get("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Keine id gefunden.");
    }

    Optional<DonationProductResponse> donationProductResponse = database.querySingle(DonationProductResponse.class, """
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
