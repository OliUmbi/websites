package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.ByteBuffer;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.http.HttpURI;
import org.eclipse.jetty.http.HttpVersion;
import org.eclipse.jetty.server.ConnectionMetaData;
import org.eclipse.jetty.server.Context;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.Callback;
import org.eclipse.jetty.util.HostPort;

@Autoload
public class Gateway extends Handler.Abstract {

  private final ObjectMapper objectMapper = new ObjectMapper();
  private final Handle handle;

  public Gateway(Handle handle) {
    this.handle = handle;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {
    ConnectionMetaData metaData = request.getConnectionMetaData();
    HttpURI uri = request.getHttpURI();
    String method = request.getMethod();
    HttpFields headers = request.getHeaders();
    ByteBuffer body = request.read().getByteBuffer();

    ch.oliumbi.api.server.Response<Object> internal = handle.request(metaData, uri, method, headers, body);

    response.setStatus(internal.getStatus().code());
    response.getHeaders().add("Content-Type", "application/json");

    try {
      ByteBuffer buffer = BufferUtil.toBuffer(objectMapper.writeValueAsString(internal.getBody()));
      response.write(true, buffer, callback);
    } catch (JsonProcessingException e) {
      throw new RuntimeException(e);
    }

    return true;
  }
}
