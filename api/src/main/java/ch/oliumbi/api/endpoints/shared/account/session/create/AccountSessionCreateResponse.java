package ch.oliumbi.api.endpoints.shared.account.session.create;

import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountSessionCreateResponse {

  private UUID id;
  private String token;
  private List<SharedAccountPermissionPermission> permissions;
}
