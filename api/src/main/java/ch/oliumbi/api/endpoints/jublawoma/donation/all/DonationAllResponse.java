package ch.oliumbi.api.endpoints.jublawoma.donation.all;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationAllResponse {

  private UUID id;
  private String title;
  private String description;
  private String contact;
  private LocalDateTime start;
  private LocalDateTime finish;

  private List<DonationAllProductResponse> products;
}
