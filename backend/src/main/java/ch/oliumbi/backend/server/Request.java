package ch.oliumbi.backend.server;

public class Request<T> {

  private final Object body;

  public Request(Object body) {
    this.body = body;
  }

  public T getBody() {
    //noinspection unchecked
    return (T) body;
  }
}
