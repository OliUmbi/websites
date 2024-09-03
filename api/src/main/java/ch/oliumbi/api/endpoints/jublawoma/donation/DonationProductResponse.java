package ch.oliumbi.api.endpoints.jublawoma.donation;

import ch.oliumbi.api.enums.JublawomaDonationProductUnit;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationProductResponse {
  private UUID id;
  private String name;
  private Double quantity;
  private Double donated;
  private JublawomaDonationProductUnit unit;
}
