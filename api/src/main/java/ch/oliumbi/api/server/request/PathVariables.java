package ch.oliumbi.api.server.request;

import java.util.ArrayList;
import java.util.Optional;
import org.eclipse.jetty.http.HttpURI;

public class PathVariables extends ArrayList<PathVariable> {

  public PathVariables(HttpURI httpURI, String route) {

    String[] routeParts = route.split("/");
    String[] urlParts = httpURI.getDecodedPath().split("/");

    for (int i = 0; i < routeParts.length; i++) {
      String routePart = routeParts[i];
      String urlPart = urlParts[i];

      if (routePart.startsWith(":")) {
        add(new PathVariable(routePart.substring(1), urlPart));
      }
    }
  }

  public Optional<String> get(String name) {
    return this.stream()
        .filter(pathVariable -> pathVariable.getName().equals(name))
        .map(PathVariable::getValue)
        .findFirst();
  }
}
