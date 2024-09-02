package ch.oliumbi.api.endpoints.jublawoma.donation;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationResponse {
  private String name;
  private String description;
  private String contact;
  private LocalDateTime start;
  private LocalDateTime finish;

  private List<DonationProductResponse> products;
}
