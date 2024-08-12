package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
import java.nio.ByteBuffer;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Handle {

  public static final Logger LOGGER = LoggerFactory.getLogger(Handle.class);

  private final List<Endpoint<?, ?>> endpoints;
  private final Cors cors;

  public Handle(Endpoint<?, ?>[] endpoints, Cors cors) {
    this.endpoints = List.of(endpoints);
    this.cors = cors;
  }

  public Response<?> request(Meta meta, Method method, Path path, Headers headers, ByteBuffer buffer) {

    if (method == Method.OPTIONS) {
      return cors.response();
    }

    for (Endpoint<?, ?> endpoint : endpoints) {

      if (method != endpoint.method()) {
        continue;
      }

      path.setRoute(endpoint.route());
      if (!path.matches()) {
        continue;
      }
      
      Session session;

      if (!endpoint.permissions().isEmpty() && !session.getPermissions().containsAll(endpoint.permissions())) {
        return new Response<>(Status.FORBIDDEN, "Missing permission.");
      }

      Object body;
      try {
        body = Body.convert(endpoint, buffer);
      } catch (Exception e) {
        LOGGER.warn(e.getMessage());
        return new Response<>(Status.BAD_REQUEST, "Body is malformed.");
      }

      try {
        return endpoint.handle(new Request<>(session, meta, method, path, headers, body));
      } catch (Exception e) {
        LOGGER.error("Failed to handle request, reason: unexpected exception from endpoint", e);
        return new Response<>(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
      }
    }

    return new Response<>(Status.BAD_REQUEST, "No matching endpoint found.");
  }
}
