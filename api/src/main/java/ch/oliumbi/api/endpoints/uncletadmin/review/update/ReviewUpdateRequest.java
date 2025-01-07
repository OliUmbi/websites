package ch.oliumbi.api.endpoints.uncletadmin.review.update;

import ch.oliumbi.api.enums.unclet.UncletReviewStatus;
import ch.oliumbi.api.server.Validatable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewUpdateRequest implements Validatable {

  private UncletReviewStatus status;
  private Integer stars;
  private String name;
  private String description;
  private LocalDateTime date;

  @Override
  public boolean valid() {
    if (status == null) {
      return false;
    }

    if (stars == null) {
      return false;
    }

    if (name == null) {
      return false;
    }

    if (description == null) {
      return false;
    }

    if (date == null) {
      return false;
    }

    return true;
  }
}
