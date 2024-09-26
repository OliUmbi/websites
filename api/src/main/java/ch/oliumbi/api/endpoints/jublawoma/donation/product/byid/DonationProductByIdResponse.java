package ch.oliumbi.api.endpoints.jublawoma.donation.product.byid;

import ch.oliumbi.api.enums.jublawoma.JublawomaDonationProductUnit;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationProductByIdResponse {
  private UUID id;
  private String name;
  private Double quantity;
  private Double donated;
  private Double step;
  private JublawomaDonationProductUnit unit;
  private String note;
}
