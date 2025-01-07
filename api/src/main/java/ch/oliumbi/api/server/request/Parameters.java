package ch.oliumbi.api.server.request;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;
import org.eclipse.jetty.http.HttpURI;

public class Parameters extends ArrayList<Parameter> {

  public Parameters(HttpURI httpURI) {
    String query = httpURI.getQuery();

    if (query == null || query.isBlank()) {
      return;
    }

    String[] split = query.split("&");

    for (String s : split) {
      if (s.isBlank()) {
        continue;
      }

      String[] split1 = s.split("=");

      if (split1.length != 2) {
        throw new RuntimeException("Failed to handle request, reason: parameter malformed, parameter: " + s);
      }

      add(new Parameter(split1[0], split1[1]));
    }
  }

  public Optional<String> getString(String name) {
    return this.stream()
        .filter(parameter -> parameter.getName().equals(name))
        .map(Parameter::getValue)
        .findFirst();
  }

  public Optional<Integer> getInteger(String name) {
    Optional<String> parameter = getString(name);

    if (parameter.isEmpty()) {
      return Optional.empty();
    }

    try {
      return Optional.of(Integer.parseInt(parameter.get()));
    } catch (NumberFormatException e) {
      return Optional.empty();
    }
  }

  public Optional<UUID> getUUID(String name) {
    Optional<String> parameter = getString(name);

    if (parameter.isEmpty()) {
      return Optional.empty();
    }

    try {
      return Optional.of(UUID.fromString(parameter.get()));
    } catch (NumberFormatException e) {
      return Optional.empty();
    }
  }

  public Optional<Integer> start() {
    Optional<Integer> start = getInteger("start");

    if (start.isEmpty()) {
      return Optional.empty();
    }

    if (start.get() < 0) {
      return Optional.empty();
    }

    return start;
  }

  public Optional<Integer> size(int max) {
    Optional<Integer> size = getInteger("size");

    if (size.isEmpty()) {
      return Optional.empty();
    }

    if (size.get() < 1 || size.get() > max) {
      return Optional.empty();
    }

    return size;
  }
}
