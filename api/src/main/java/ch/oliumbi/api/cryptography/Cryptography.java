package ch.oliumbi.api.cryptography;

import ch.oliumbi.api.autoload.Autoload;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;

@Autoload
public class Cryptography {

  private final Argon2PasswordEncoder argon2PasswordEncoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();

  public String encode(String input) {
    return argon2PasswordEncoder.encode(input);
  }

  public boolean matches(String input, String hash) {
    return argon2PasswordEncoder.matches(input, hash);
  }
}
