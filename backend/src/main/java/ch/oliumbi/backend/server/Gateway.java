package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.enums.Method;
import java.net.SocketAddress;
import java.nio.ByteBuffer;
import java.util.List;
import org.eclipse.jetty.http.HttpFields;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.Callback;

@Autoload
public class Gateway extends Handler.Abstract {

  private final Handle handle;

  public Gateway(Handle handle) {
    this.handle = handle;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {
    String ip = request.getConnectionMetaData().getRemoteSocketAddress().toString();
    String url = request.getHttpURI().getDecodedPath();
    String params = request.getHttpURI().getQuery();
    Method method = Method.valueOf(request.getMethod());
    List<Header> headers = request.getHeaders().stream().map(httpField -> new Header(httpField.getName(), httpField.getValue())).toList();
    ByteBuffer body = request.read().getByteBuffer();

    ByteBuffer buffer = handle.request(ip, method, url, params, headers, body);

    response.write(true, buffer, callback);

    return true;
  }
}
