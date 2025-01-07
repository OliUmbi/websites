package ch.oliumbi.api.endpoints.uncletadmin.booking.update;

import ch.oliumbi.api.enums.unclet.UncletBookingStatus;
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
public class BookingUpdateRequest implements Validatable {

  private UncletBookingStatus status;

  @Override
  public boolean valid() {
    if (status == null) {
      return false;
    }

    return true;
  }
}
