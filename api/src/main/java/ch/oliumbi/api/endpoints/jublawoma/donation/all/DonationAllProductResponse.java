package ch.oliumbi.api.endpoints.jublawoma.donation.all;

import ch.oliumbi.api.enums.JublawomaDonationProductUnit;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationAllProductResponse {
  private UUID id;
  private String name;
  private Double quantity;
  private Double donated;
  private Double step;
  private JublawomaDonationProductUnit unit;
  private String note;
}
