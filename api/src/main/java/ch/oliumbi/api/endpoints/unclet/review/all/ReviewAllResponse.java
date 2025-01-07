package ch.oliumbi.api.endpoints.unclet.review.all;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewAllResponse {

  private UUID id;
  private Integer stars;
  private String name;
  private String description;
  private LocalDateTime date;
}
