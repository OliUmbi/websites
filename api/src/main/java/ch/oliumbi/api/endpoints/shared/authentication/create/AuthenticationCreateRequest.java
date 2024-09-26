package ch.oliumbi.api.endpoints.shared.authentication.create;

import ch.oliumbi.api.server.Validatable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationCreateRequest implements Validatable {

  private String name;
  private String password;

  @Override
  public boolean valid() {
    if (name == null) {
      return false;
    }

    if (password == null) {
      return false;
    }

    return true;
   }
}
