package ch.oliumbi.api.database;

import java.util.HashMap;
import java.util.Optional;

public class Row extends HashMap<String, Object> {

  public Optional<String> string(String name) {
    Object value = get(name);

    if (value instanceof String string) {
      return Optional.of(string);
    } else {
      return Optional.empty();
    }
  }
}
