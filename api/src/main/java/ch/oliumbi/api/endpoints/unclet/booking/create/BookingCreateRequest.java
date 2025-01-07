package ch.oliumbi.api.endpoints.unclet.booking.create;

import ch.oliumbi.api.server.Validatable;
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
public class BookingCreateRequest implements Validatable {

  private String name;
  private String email;
  private LocalDateTime date;
  private String location;
  private Integer people;
  private String note;

  @Override
  public boolean valid() {
    if (name == null) {
      return false;
    }

    if (email == null) {
      return false;
    }

    if (date == null) {
      return false;
    }

    if (location == null) {
      return false;
    }

    if (people == null) {
      return false;
    }

    return true;
  }
}
