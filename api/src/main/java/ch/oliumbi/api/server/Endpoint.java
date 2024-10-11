package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.Response;
import java.util.List;

public interface Endpoint<T> {

  Method method();

  // List<Domain> domains();
  // String route();

  List<String> routes();

  List<SharedAccountPermissionPermission> permissions();

  Response handle(Request<T> request);
}
