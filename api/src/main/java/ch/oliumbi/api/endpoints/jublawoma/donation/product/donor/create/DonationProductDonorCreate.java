package ch.oliumbi.api.endpoints.jublawoma.donation.product.donor.create;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
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
  public List<String> routes() {
    return List.of("/jublawoma/donation/product/donor");
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<DonationProductDonorCreateRequest> request) {

    if (!request.getBody().valid()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid body.");
    }

    UUID id = UUID.randomUUID();

    Optional<Integer> create = database.update("""
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
        Param.of("id", id),
        request.getBody());

    if (create.isEmpty()) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to create donation.");
    }

    // todo maybe email?

    return new MessageResponse(Status.OK, "Successfully created donation.");
  }
}
