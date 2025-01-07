package ch.oliumbi.api.endpoints.uncletadmin.review.all;

import ch.oliumbi.api.enums.unclet.UncletBookingStatus;
import ch.oliumbi.api.enums.unclet.UncletReviewStatus;
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
  private UncletReviewStatus status;
  private Integer stars;
  private String name;
  private LocalDateTime date;
}
