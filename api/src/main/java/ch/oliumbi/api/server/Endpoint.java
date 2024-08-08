package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import java.util.List;

public interface Endpoint<T, U> {

  Method method();

  String route();

  List<Permission> permissions();

  Response<T> handle(Request<U> request);
}
