package ch.oliumbi.api.endpoints.oliumbiadmin.notify.all;

import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NotifyAllResponse {

  private UUID id;
  private String email;
}
