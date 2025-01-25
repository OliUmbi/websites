package ch.oliumbi.api.endpoints.oliumbi.notify.create;

import ch.oliumbi.api.server.Validatable;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NotifyCreateRequest implements Validatable {

  private String email;

  @Override
  public boolean valid() {
    if (email == null) {
      return false;
    }

    return true;
  }
}
