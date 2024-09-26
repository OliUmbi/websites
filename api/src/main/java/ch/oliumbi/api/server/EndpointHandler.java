package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.shared.account.Account;
import ch.oliumbi.api.shared.account.AccountPermission;
import ch.oliumbi.api.shared.account.AccountService;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.request.Body;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Headers;
import ch.oliumbi.api.server.request.Meta;
import ch.oliumbi.api.server.request.Parameters;
import ch.oliumbi.api.server.request.Path;
import ch.oliumbi.api.server.request.PathVariables;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.nio.ByteBuffer;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class EndpointHandler {

  private static final Logger LOGGER = LoggerFactory.getLogger(EndpointHandler.class);

  private final List<Endpoint<?>> endpoints;
  private final Configuration configuration;
  private final AccountService accountService;

  public EndpointHandler(Endpoint<?>[] endpoints, Configuration configuration, AccountService accountService) {
    this.endpoints = List.of(endpoints);
    this.configuration = configuration;
    this.accountService = accountService;
  }

  public Response request(ConnectionMetaData connectionMetaData, String methodString, HttpURI httpURI, HttpFields httpFields, CompletableFuture<ByteBuffer> byteBuffer) {

    Response response = handle(connectionMetaData, methodString, httpURI, httpFields, byteBuffer);

    response.getHeaders().add(new Header("Content-Type", response.getContentType().toString()));

    String origin = httpFields.get("Origin");

    if (origin != null && configuration.strings("cors.origins").contains(origin)) {
      response.getHeaders().add(new Header("Access-Control-Allow-Origin", origin));
    } else {
      response.getHeaders().add(new Header("Access-Control-Allow-Origin", "*"));
    }

    response.getHeaders().add(new Header("Access-Control-Allow-Methods", configuration.string("cors.methods")));
    response.getHeaders().add(new Header("Access-Control-Allow-Headers", configuration.string("cors.headers")));
    response.getHeaders().add(new Header("Access-Control-Max-Age", "86400"));

    return response;
  }

  private Response handle(ConnectionMetaData connectionMetaData, String methodString, HttpURI httpURI, HttpFields httpFields, CompletableFuture<ByteBuffer> byteBuffer) {

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

    if (method == Method.OPTIONS || method == Method.HEAD) {
      return new MessageResponse(Status.OK, "Pong.");
    }

    for (Endpoint<?> endpoint : endpoints) {
      if (method != endpoint.method()) {
        continue;
      }

      if (!path.matches(endpoint.routes())) {
        continue;
      }

      PathVariables pathVariables;
      try {
        pathVariables = new PathVariables(httpURI, endpoint.routes().getFirst());
      } catch (Exception e) {
        LOGGER.error("Failed to convert path", e);
        return new MessageResponse(Status.BAD_REQUEST, "Url is malformed.");
      }

      Object body;
      try {
        body = Body.convert(endpoint, byteBuffer);
      } catch (Exception e) {
        // todo rethink logging this error due to it just being malformed bodies
        LOGGER.warn(e.getMessage());
        return new MessageResponse(Status.BAD_REQUEST, "Body is malformed.");
      }

      Account session = null;
      if (!endpoint.permissions().isEmpty()) {
        Optional<Header> authentication = headers.get("Authentication");
        if (authentication.isEmpty()) {
          return new MessageResponse(Status.UNAUTHORIZED, "Authentication is missing.");
        }

        Optional<Account> account = accountService.loadByToken(authentication.get().getValue());

        if (account.isEmpty()) {
          return new MessageResponse(Status.UNAUTHORIZED, "Authentication is invalid.");
        }

        if (!hasPermission(account.get().getPermissions(), endpoint.permissions())) {
          return new MessageResponse(Status.FORBIDDEN, "Missing permission.");
        }

        session = account.get();
      }

      try {
        return endpoint.handle(new Request<>(meta, method, path, parameters, pathVariables, headers, body, session));
      } catch (Exception e) {
        LOGGER.error("Failed to handle request, reason: unexpected exception from endpoint", e);
        return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
      }
    }

    return new MessageResponse(Status.BAD_REQUEST, "No matching endpoint found.");
  }

  private boolean hasPermission(List<AccountPermission> accountPermissions, List<SharedAccountPermissionPermission> endpointPermissions) {
    for (SharedAccountPermissionPermission endpointPermission : endpointPermissions) {
      for (AccountPermission accountPermission : accountPermissions) {
        if (accountPermission.getPermission().equals(endpointPermission)) {
          return true;
        }
      }
    }

    return false;
  }
}
