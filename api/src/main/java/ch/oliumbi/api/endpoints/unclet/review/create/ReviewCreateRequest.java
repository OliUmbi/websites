package ch.oliumbi.api.endpoints.unclet.review.create;

import ch.oliumbi.api.server.Validatable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewCreateRequest implements Validatable {

  private Integer stars;
  private String name;
  private String description;

  @Override
  public boolean valid() {
    if (stars == null || stars < 0 || stars > 5) {
      return false;
    }

    if (name == null) {
      return false;
    }

    if (description == null) {
      return false;
    }

    return true;
  }
}
