package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.confguration.Configuration;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.io.ObjectInputStream;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.ServerConnector;

@Autoload
public class Server {

  private final Configuration configuration;
  private final List<Endpoint<?, ?>> endpoints;

  public Server(Configuration configuration, Endpoint<?, ?>[] endpoints) throws Exception {
    this.configuration = configuration;
    this.endpoints = List.of(endpoints);

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

        endpoint.handle(new Request<>(o));
      }
    }

  }

  public void start() {

    org.eclipse.jetty.server.Server server = new org.eclipse.jetty.server.Server();
    Connector connector = new ServerConnector(server);
    server.addConnector(connector);

    server.setHandler(new Handler.Abstract()
    {
      @Override
      public boolean handle(Request request, Response response, Callback callback)
      {
        // Succeed the callback to signal that the
        // request/response processing is complete.
        callback.succeeded();
        return true;
      }
    });

    server.start();
  }

}
