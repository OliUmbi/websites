package ch.oliumbi.api.server.request;

import ch.oliumbi.api.enums.Permission;
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
public class Session {

  private String token;
  private UUID accountId;
  private List<Permission> permissions;
}
