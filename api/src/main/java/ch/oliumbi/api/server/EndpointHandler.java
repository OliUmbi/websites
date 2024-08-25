package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.endpoints.Cors;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.models.Account;
import ch.oliumbi.api.models.AccountPermission;
import ch.oliumbi.api.services.accounts.AccountService;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
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
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class EndpointHandler {

  private static final Logger LOGGER = LoggerFactory.getLogger(EndpointHandler.class);

  private final List<Endpoint<?>> endpoints;
  private final Cors cors;
  private final AccountService accountService;

  public EndpointHandler(Endpoint<?>[] endpoints, Cors cors, AccountService accountService) {
    this.endpoints = List.of(endpoints);
    this.cors = cors;
    this.accountService = accountService;
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

      PathVariables pathVariables;
      try {
        pathVariables = new PathVariables(httpURI, endpoint.route());
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

        List<Permission> permissions = account.get().getPermissions().stream().map(AccountPermission::getPermission).toList();

        if (!permissions.containsAll(endpoint.permissions())) {
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
}