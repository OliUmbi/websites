package ch.oliumbi.api.shared.account;

import java.time.LocalDateTime;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountSession {

  public UUID id;
  private UUID accountId;
  private String token;
  private LocalDateTime expires;
}
