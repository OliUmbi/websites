package ch.oliumbi.backend.server;

public interface Endpoint<T, U> {

  Method method();

  String route();

  Response<T> handle(Request<U> request);
}
