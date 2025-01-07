package ch.oliumbi.api.endpoints.uncletadmin.booking.all;

import ch.oliumbi.api.enums.unclet.UncletBookingStatus;
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
public class BookingAllResponse {

  private UUID id;
  private UncletBookingStatus status;
  private String name;
  private LocalDateTime date;
}
