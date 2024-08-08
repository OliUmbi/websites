package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.nio.ByteBuffer;
import java.util.List;
import org.eclipse.jetty.util.BufferUtil;

@Autoload
public class Handle {

  private final List<Endpoint<?, ?>> endpoints;

  public Handle(Endpoint<?, ?>[] endpoints) {
    this.endpoints = List.of(endpoints);
  }

  public ByteBuffer request(String ip, Method method, String url, List<Parameter> parameters, List<Header> headers, ByteBuffer body) {

    Request<Object> request = new Request<>();

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

        Object o = null;
        try {
          o = objectMapper.readValue(BufferUtil.toString(body), typeFactory.constructType(requestType));
        } catch (JsonProcessingException e) {
          throw new RuntimeException(e);
        }

        System.out.println(o);

        Response<?> response = endpoint.handle(new Request<>(ip, method, url, parameters, headers, o));

        try {
          return BufferUtil.toBuffer(objectMapper.writeValueAsString(response.getBody()));
        } catch (JsonProcessingException e) {
          throw new RuntimeException(e);
        }
      }
    }

    return BufferUtil.toBuffer("");
  }
}
