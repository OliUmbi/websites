package ch.oliumbi.api.server;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Path {

  private String url;
  private String route;
  private List<Parameter> parameters;

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
