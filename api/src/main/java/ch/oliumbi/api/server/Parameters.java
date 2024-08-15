package ch.oliumbi.api.server;

import java.util.ArrayList;
import java.util.Optional;
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

  public Optional<String> get(String name) {
    return this.stream()
        .filter(parameter -> parameter.getName().equals(name))
        .map(Parameter::getValue)
        .findFirst();
  }
}
