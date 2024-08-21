package ch.oliumbi.api.server.request;

import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.services.session.Session;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Request<T> {

  private Meta meta;
  private Method method;
  private Path path;
  private Parameters parameters;
  private PathVariables pathVariables;
  private Headers headers;
  private Object body;

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
