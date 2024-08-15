package ch.oliumbi.api.server.request;

import ch.oliumbi.api.enums.Method;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Request<T> {

  private Session session;
  private Meta meta;
  private Method method;
  private Path path;
  private Headers headers;
  private Object body;

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
