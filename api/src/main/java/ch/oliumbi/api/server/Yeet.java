package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import java.nio.ByteBuffer;

@Autoload
public class Yeet {

  public Response<?> yeet() {
    Meta meta = Meta.convert(request.getConnectionMetaData());
    Method method = Method.convert(request.getMethod());
    Path path = new Path(request.getHttpURI());
    Headers headers = new Headers(request.getHeaders());
    ByteBuffer buffer = request.read().getByteBuffer();



    ch.oliumbi.api.server.Response<?> internal = handle.request(meta, method, path, headers, buffer);
  }
}
