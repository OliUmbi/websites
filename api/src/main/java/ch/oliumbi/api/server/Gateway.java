package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.List;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.Callback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Gateway extends Handler.Abstract {

  public static final Logger LOGGER = LoggerFactory.getLogger(Gateway.class);
  private final ObjectMapper objectMapper = new ObjectMapper();
  private final Handle handle;

  public Gateway(Handle handle) {
    this.handle = handle;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {


    // todo get header, get session, etc.
    Meta meta = Meta.convert(request.getConnectionMetaData());
    Method method = Method.convert(request.getMethod());
    Path path = Path.convert(request.getHttpURI());
    Headers headers = Headers.convert(request.getHeaders());
    ByteBuffer buffer = request.read().getByteBuffer();



    ch.oliumbi.api.server.Response<?> internal = handle.request(meta, method, path, headers, buffer);





    try {
      byte[] bytes = [];

      response.write(true, ByteBuffer.wrap(bytes), callback);
      return true;
    } catch (IOException e) {
      throw new RuntimeException(e);
    }

    /**
    response.setStatus(internal.getStatus().code());
    response.getHeaders().add("Content-Type", "application/json");

    Object object = internal.getBody();

    if (internal.getMessage() != null) {
      object = new Message(internal.getMessage());
    }

    try {
      ByteBuffer buffer = BufferUtil.toBuffer(objectMapper.writeValueAsString(object));
      response.write(true, buffer, callback);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }

    return true;
     */
  }
}
