package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.server.response.Response;
import java.util.List;

public interface Endpoint<T> {

  Method method();

  String route();

  List<Permission> permissions();

  Response handle(Request<T> request);
}
