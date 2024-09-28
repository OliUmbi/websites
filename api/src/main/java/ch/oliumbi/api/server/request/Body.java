package ch.oliumbi.api.server.request;

import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.Json;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.CompletableFuture;
import org.eclipse.jetty.io.Content.Chunk;
import org.eclipse.jetty.util.BufferUtil;

public class Body {

  public static Object convert(Endpoint<?> endpoint, CompletableFuture<ByteBuffer> byteBuffer) throws Exception {
    Type requestType = requestType(endpoint);

    if (requestType == Void.class) {
      return null;
    }

    ByteBuffer body = byteBuffer.get();

    if (body == null) {
      throw new Exception("Failed to handle request, reason: missing body");
    }

    if (requestType == Bytes.class) {
      return new Bytes(BufferUtil.toArray(body));
    }

    try {
      String content = BufferUtil.toString(body, StandardCharsets.UTF_8);
      return Json.read(content, requestType);
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
