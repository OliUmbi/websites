package ch.oliumbi.api.endpoints.jublawoma.donation.product.donor.create;

import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationProductDonorCreateRequest {
  private UUID donationProductId;
  private String firstname;
  private String lastname;
  private String phone;
  private Double quantity;
  private String note;
}
