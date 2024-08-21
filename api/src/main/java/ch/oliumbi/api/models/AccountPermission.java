package ch.oliumbi.api.models;

import ch.oliumbi.api.enums.Permission;
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
  private Permission permission;
}
