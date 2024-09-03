package ch.oliumbi.api.server.request;

import ch.oliumbi.api.server.Endpoint;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.nio.ByteBuffer;
import org.eclipse.jetty.io.Content.Chunk;
import org.eclipse.jetty.util.BufferUtil;

public class Body {

  private static final ObjectMapper objectMapper = new ObjectMapper();
  private static final TypeFactory typeFactory = objectMapper.getTypeFactory();

  public static Object convert(Endpoint<?> endpoint, Chunk chunk) throws Exception {
    Type requestType = requestType(endpoint);

    if (requestType == Void.class) {
      return null;
    }

    if (chunk == null) {
      throw new Exception("Failed to handle request, reason: missing body");
    }

    if (chunk.getFailure() != null) {
      throw new Exception("Failed to handle request, reason: error in body transfer", chunk.getFailure());
    }

    try {
      String content = BufferUtil.toString(chunk.getByteBuffer());
      return objectMapper.readValue(content, typeFactory.constructType(requestType));
    } catch (JsonProcessingException e) {
      throw new Exception("Failed to handle request, reason: failed to map body to request type", e);
    }
  }

  private static Type requestType(Endpoint<?> endpoint) throws Exception {
    Type[] genericInterfaces = endpoint.getClass().getGenericInterfaces();

    if (genericInterfaces.length == 0) {
      throw new Exception("Failed to handle request, reason: somehow no generic interface is defined on Endpoint");
    }

    for (Type genericInterface : genericInterfaces) {
      if (genericInterface instanceof ParameterizedType parameterizedType && parameterizedType.getRawType() == Endpoint.class) {

        Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();

        if (actualTypeArguments.length == 0) {
          throw new Exception("Failed to handle request, reason: no generic types found");
        }

        return actualTypeArguments[0];
      }
    }

    throw new Exception("Failed to handle request, reason: somehow no endpoint interface is defined");
  }
}
