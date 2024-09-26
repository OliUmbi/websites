package ch.oliumbi.api.server.request;

import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.shared.account.Account;
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
  private Account session;

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
