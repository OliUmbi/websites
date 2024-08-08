package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Method;
import java.util.List;
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
  private List<Parameter> parameters;
  private List<Header> headers;
  private Object body;

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
