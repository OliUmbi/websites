package ch.oliumbi.api.endpoints.jublawoma.donation.product.donor.create;

import ch.oliumbi.api.server.Validatable;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationProductDonorCreateRequest implements Validatable {
  private UUID donationProductId;
  private String firstname;
  private String lastname;
  private String phone;
  private Double quantity;
  private String note;

  @Override
  public boolean valid() {
    if (donationProductId == null) {
      return false;
    }

    if (firstname == null) {
      return false;
    }

    if (lastname == null) {
      return false;
    }

    if (phone == null) {
      return false;
    }

    if (quantity == null) {
      return false;
    }

    return true;
  }
}
