package ch.oliumbi.api.shared.account;

import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountPermission {

  private UUID id;
  private UUID accountId;
  private SharedAccountPermissionPermission permission;
}
