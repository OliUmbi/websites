package ch.oliumbi.api.endpoints.jublawomaadmin.authentication.requests;

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
