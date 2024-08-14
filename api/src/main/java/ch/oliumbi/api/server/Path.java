package ch.oliumbi.api.server;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.jetty.http.HttpURI;

@Getter
@Setter
public class Path {

  private String url;
  private String route;
  private List<Parameter> parameters;

  public Path(HttpURI httpURI) {

    this.url = httpURI.getDecodedPath();





  }

  public Optional<String> pathVariable(String name) {
    return Optional.of("");
  }

  public Optional<String> parameter(String name) {
    return parameters.stream()
        .filter(parameter -> parameter.getName().equals(name))
        .map(Parameter::getValue)
        .findFirst();
  }

  public boolean matches() {
    return true;
  }
}

/**
 *
 * Gateway
 * Validation
 *
 *
 * method = start
 * params = start
 * headers = start
 * body = endpoint
 * authentication = endpoint
 * cors = start
 * meta = start
 * path matching = endpoint
 * path variable = endpoint
 * path variable datatype = end
 */
