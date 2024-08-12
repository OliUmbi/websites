package ch.oliumbi.api.server;

import java.util.ArrayList;
import java.util.Optional;

public class Headers extends ArrayList<Header> {

  public Optional<Header> get(String name) {
    return this.stream()
        .filter(header -> header.getName().equals(name))
        .findFirst();
  }
}
