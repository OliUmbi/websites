package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.nio.ByteBuffer;
import java.util.List;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Handle {

  public static final Logger LOGGER = LoggerFactory.getLogger(Handle.class);

  private final List<Endpoint<?>> endpoints;
  private final Cors cors;

  public Handle(Endpoint<?>[] endpoints, Cors cors) {
    this.endpoints = List.of(endpoints);
    this.cors = cors;
  }

  public Response request(ConnectionMetaData connectionMetaData, String methodString, HttpURI httpURI, HttpFields httpFields, ByteBuffer buffer) {

    Meta meta;
    try {
      meta = new Meta(connectionMetaData);
    } catch (Exception e) {
      LOGGER.error("Failed to convert meta", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }

    Method method;
    try {
      method = Method.convert(methodString);
    } catch (Exception e) {
      LOGGER.error("Failed to convert method", e);
      return new MessageResponse(Status.BAD_REQUEST, "Method is unsupported.");
    }

    Path path;
    try {
      path = new Path(httpURI);
    } catch (Exception e) {
      LOGGER.error("Failed to convert path", e);
      return new MessageResponse(Status.BAD_REQUEST, "Url is malformed.");
    }

    Parameters parameters;
    try {
      parameters = new Parameters(httpURI);
    } catch (Exception e) {
      LOGGER.error("Failed to convert path", e);
      return new MessageResponse(Status.BAD_REQUEST, "Url is malformed.");
    }

    Headers headers;
    try {
      headers = new Headers(httpFields);
    } catch (Exception e) {
      LOGGER.error("Failed to convert headers", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }

    if (method == Method.OPTIONS) {
      return cors.response();
    }

    for (Endpoint<?> endpoint : endpoints) {
      if (method != endpoint.method()) {
        continue;
      }

      if (!path.matches(endpoint.route())) {
        continue;
      }

      Session session;
      String token = headers.get("Authentication");
      // todo what to do when no user is defined? is session gonna be optional? and where would this be created?

      if (token != null) {

      }

      if (!endpoint.permissions().isEmpty() && !session.getPermissions().containsAll(endpoint.permissions())) {
        return new MessageResponse(Status.FORBIDDEN, "Missing permission.");
      }

      PathVariables pathVariables;
      try {
        pathVariables = new PathVariables(request.getHttpURI(), endpoint.route());
      } catch (Exception e) {
        LOGGER.error("Failed to convert path", e);
        return new MessageResponse(Status.BAD_REQUEST, "Url is malformed.");
      }

      Object body;
      try {
        body = Body.convert(endpoint, buffer);
      } catch (Exception e) {
        LOGGER.warn(e.getMessage());
        return new MessageResponse(Status.BAD_REQUEST, "Body is malformed.");
      }

      try {
        return endpoint.handle(new ch.oliumbi.api.server.Request<>(session, meta, method, path, headers, body));
      } catch (Exception e) {
        LOGGER.error("Failed to handle request, reason: unexpected exception from endpoint", e);
        return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
      }
    }

    return new MessageResponse(Status.BAD_REQUEST, "No matching endpoint found.");
  }
}
