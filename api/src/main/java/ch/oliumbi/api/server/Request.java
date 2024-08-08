package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Method;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Request<T> {

  private String ip;
  private Method method;
  private String url;
  private Map<String, String> headers;
  private Object body;

  public Request(Object body) {
    this.body = body;
  }

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
