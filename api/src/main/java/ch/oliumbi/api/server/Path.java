package ch.oliumbi.api.server;

import java.util.UUID;

public class Path {
  private final String pattern;
  private final String url;

  public Path(String pattern, String url) {
    this.pattern = pattern;
    this.url = url;
  }

  public boolean matches() {
    String[] patternParts = pattern.split("/");
    String[] urlParts = url.split("/");

    if (patternParts.length != urlParts.length) {
      return false;
    }

    for (int i = 0; i < patternParts.length; i++) {
      String patternPart = patternParts[i];
      String urlPart = urlParts[i];

      if (patternPart.startsWith(":")) {
        continue;
      }

      if (!patternPart.equals(urlPart)) {
        return false;
      }
    }

    return true;
  }

  public String string(String name) {
    String[] patternParts = pattern.split("/");
    String[] urlParts = url.split("/");

    for (int i = 0; i < patternParts.length; i++) {
      String patternPart = patternParts[i];
      String urlPart = urlParts[i];

      if (patternPart.startsWith(":") && patternPart.substring(1).equals(name)) {
        return urlPart;
      }
    }

    return null;
  }

  public Integer integer(String name) {
    return Integer.valueOf(string(name));
  }

  public UUID uuid(String name) {
    return UUID.fromString(string(name));
  }
}
