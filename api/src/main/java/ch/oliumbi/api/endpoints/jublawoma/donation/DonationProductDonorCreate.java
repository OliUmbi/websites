package ch.oliumbi.api.endpoints.jublawoma.donation;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.endpoints.jublawoma.donation.requests.DonationProductDonorCreateRequest;
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
public class DonationProductDonorCreate implements Endpoint<DonationProductDonorCreateRequest> {

  private final Database database;

  public DonationProductDonorCreate(Database database) {
    this.database = database;
  }

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public String route() {
    return "/jublawoma/donation/product/donor";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<DonationProductDonorCreateRequest> request) {

    if (request.getBody().getDonationProductId() == null ||
        request.getBody().getFirstname() == null ||
        request.getBody().getLastname() == null ||
        request.getBody().getPhone() == null ||
        request.getBody().getQuantity() == null) {
      return new MessageResponse(Status.BAD_REQUEST, "Nicht alle Pflichtfelder sind ausgefüllt.");
    }

    Optional<Integer> rows = database.update("""
            INSERT INTO jublawoma_donation_product_donor (
                      id,
                      donation_product_id,
                      firstname,
                      lastname,
                      phone,
                      quantity,
                      note)
            VALUES (
                      :id,
                      :donationProductId,
                      :firstname,
                      :lastname,
                      :phone,
                      :quantity,
                      :note)
            """,
        Param.of("id", UUID.randomUUID()),
        request.getBody());

    if (rows.isEmpty() || rows.get() != 1) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Ein Fehler ist unterlaufen, die Spende konnte nicht gespeichert werden.");
    }

    return new MessageResponse(Status.OK, "Die Spende wurde erfolgreich empfangen. Vielen herzlichen Dank!");
  }
}
