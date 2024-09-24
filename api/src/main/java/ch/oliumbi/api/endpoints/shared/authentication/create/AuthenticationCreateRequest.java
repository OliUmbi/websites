package ch.oliumbi.api.endpoints.shared.authentication.create;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationCreateRequest {

  private String username;
  private String password;
}
