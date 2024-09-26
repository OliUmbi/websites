package ch.oliumbi.api.shared.account;

import java.util.List;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Account {

  private UUID id;
  private String name;
  private String password;

  private List<AccountSession> sessions;
  private List<AccountPermission> permissions;
}
