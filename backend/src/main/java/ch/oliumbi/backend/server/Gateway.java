package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.nio.file.PathMatcher;
import java.util.List;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.server.handler.gzip.GzipHandler;
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.Callback;

@Autoload
public class Gateway extends Handler.Abstract {

  private final List<Endpoint<?, ?>> endpoints;

  public Gateway(Endpoint<?, ?>[] endpoints) {
    this.endpoints = List.of(endpoints);
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) throws Exception {

    System.out.println(request.getHttpURI().asString());
    System.out.println(request.getHttpURI().getCanonicalPath());
    System.out.println(request.getHttpURI().getDecodedPath());

    // method, url, body
    response.write(true, BufferUtil.toBuffer("test"), callback);

    for (Endpoint<?, ?> endpoint : endpoints) {
      Type[] genericInterfaces = endpoint.getClass().getGenericInterfaces();

      if (genericInterfaces.length > 0 && genericInterfaces[0] instanceof ParameterizedType parameterizedType && parameterizedType.getRawType() == Endpoint.class) {

        Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();

        if (actualTypeArguments.length != 2) {
          throw new RuntimeException("Failed to handle endpoint, reason: too many generic types");
        }

        Type responseType = actualTypeArguments[0];
        Type requestType = actualTypeArguments[1];

        ObjectMapper objectMapper = new ObjectMapper();
        TypeFactory typeFactory = objectMapper.getTypeFactory();

        Object o = objectMapper.readValue("{\"username\": \"test\", \"password\": \"test\"}",
            typeFactory.constructType(requestType));

        System.out.println(o);

        endpoint.handle(new ch.oliumbi.backend.server.Request<>(o));
      }
    }

    return true;
  }
}
