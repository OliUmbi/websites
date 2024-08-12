package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.endpoints.account.login.LoginRequest;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.eclipse.jetty.util.BufferUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Handle {

  public static final Logger LOGGER = LoggerFactory.getLogger(Handle.class);

  private final ObjectMapper objectMapper;
  private final TypeFactory typeFactory;
  private final List<Endpoint<?, ?>> endpoints;

  public Handle(Endpoint<?, ?>[] endpoints) {
    this.objectMapper = new ObjectMapper();
    this.typeFactory = objectMapper.getTypeFactory();
    this.endpoints = List.of(endpoints);
  }

  public Response<?> request(ConnectionMetaData metaData, HttpURI uri, String methodString, HttpFields fields, ByteBuffer buffer) {

    Method method;
    try {
      method = method(methodString);
    } catch (Exception e) {
      LOGGER.warn(e.getMessage());
      return new Response<>(Status.BAD_REQUEST, "Method not supported.");
    }

    String url = url(uri);

    for (Endpoint<?, ?> endpoint : endpoints) {

      if (!method.equals(endpoint.method())) {
        continue;
      }

      if (!matches(endpoint.route(), url)) {
        continue;
      }

      List<Type> types;
      try {
        types = types(endpoint);
      } catch (Exception e) {
        LOGGER.warn(e.getMessage());
        return new Response<>(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
      }

      String ip = ip(metaData);
      List<Header> headers = headers(fields);
      List<PathVariable> pathVariables = pathVariables(endpoint.route(), url);

      List<Parameter> parameters;
      try {
        parameters = parameters(uri);
      } catch (Exception e) {
        LOGGER.warn(e.getMessage());
        return new Response<>(Status.BAD_REQUEST, "Parameters are malformed.");
      }

      Object body;
      try {
        body = body(types.get(1), buffer);
      } catch (Exception e) {
        LOGGER.warn(e.getMessage());
        return new Response<>(Status.BAD_REQUEST, "Body is malformed.");
      }

      return endpoint.handle(new Request<>(ip, method, url, parameters, pathVariables, headers, body));
    }

    return new Response<>(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
  }

  private Method method(String string) throws Exception {
    try {
      return Method.valueOf(string);
    } catch (IllegalArgumentException ignored) {
      throw new Exception("Failed to handle request, reason: unsupported method, method: " + string);
    }
  }

  private String url(HttpURI uri) {
    return uri.getDecodedPath();
  }

  private boolean matches(String pattern, String url) {
    String[] patternParts = pattern.split("/");
    String[] urlParts = url.split("/");

    if (patternParts.length != urlParts.length) {
      return false;
    }

    for (int i = 0; i < patternParts.length; i++) {
      String patternPart = patternParts[i];
      String urlPart = urlParts[i];

      if (patternPart.startsWith(":")) {
        continue;
      }

      if (!patternPart.equals(urlPart)) {
        return false;
      }
    }

    return true;
  }

  private List<Type> types(Endpoint<?, ?> endpoint) throws Exception {
    Type[] genericInterfaces = endpoint.getClass().getGenericInterfaces();

    if (genericInterfaces.length == 0) {
      throw new Exception("Failed to handle request, reason: somehow no generic interface is defined on Endpoint");
    }

    for (Type genericInterface : genericInterfaces) {
      if (genericInterface instanceof ParameterizedType parameterizedType && parameterizedType.getRawType() == Endpoint.class) {

        Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();

        if (actualTypeArguments.length != 2) {
          throw new Exception("Failed to handle request, reason: number of generic types are not 2");
        }

        return List.of(actualTypeArguments);
      }
    }

    throw new Exception("Failed to handle request, reason: somehow no endpoint interface is defined");
  }

  private String ip(ConnectionMetaData metaData) {
    return metaData.getRemoteSocketAddress().toString();
  }

  private List<Header> headers(HttpFields fields) {
    return fields.stream().map(field -> new Header(field.getName(), field.getValue())).toList();
  }

  private Object body(Type requestType, ByteBuffer byteBuffer) throws Exception {
    try {
      return objectMapper.readValue(BufferUtil.toString(byteBuffer), typeFactory.constructType(requestType));
    } catch (JsonProcessingException e) {
      throw new Exception("Failed to handle request, reason: failed to map body to request type", e);
    }
  }

  private List<PathVariable> pathVariables(String pattern, String url) {
    String[] patternParts = pattern.split("/");
    String[] urlParts = url.split("/");

    List<PathVariable> pathVariables = new ArrayList<>();

    for (int i = 0; i < patternParts.length; i++) {
      String patternPart = patternParts[i];
      String urlPart = urlParts[i];

      if (patternPart.startsWith(":")) {
        pathVariables.add(new PathVariable(patternPart.substring(1), urlPart));
      }
    }

    return pathVariables;
  }

  private List<Parameter> parameters(HttpURI uri) throws Exception {
    String query = uri.getQuery();

    if (query == null || query.isBlank()) {
      return Collections.emptyList();
    }

    String[] split = query.split("&");

    List<Parameter> parameters = new ArrayList<>();

    for (String s : split) {
      if (s.isBlank()) {
        continue;
      }

      String[] split1 = s.split("=");

      if (split1.length != 2) {
        throw new Exception("Failed to handle request, reason: parameter malformed, parameter: " + s);
      }

      parameters.add(new Parameter(split1[0], split1[1]));
    }

    return parameters;
  }
}
