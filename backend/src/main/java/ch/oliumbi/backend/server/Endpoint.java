package ch.oliumbi.backend.server;

import ch.oliumbi.backend.enums.Method;
import ch.oliumbi.backend.enums.Permission;
import java.util.List;

public interface Endpoint<T, U> {

  Method method();

  String route();

  List<Permission> permissions();

  Response<T> handle(Request<U> request);
}
