package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import java.net.SocketAddress;
import java.nio.ByteBuffer;
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
  public boolean handle(Request request, Response response, Callback callback) throws Exception {

    System.out.println(request.getHttpURI().asString());
    System.out.println(request.getHttpURI().getCanonicalPath());
    System.out.println(request.getHttpURI().getDecodedPath());

    SocketAddress ip = request.getConnectionMetaData().getRemoteSocketAddress();
    String url = request.getHttpURI().getDecodedPath();
    String params = request.getHttpURI().getQuery();
    String method = request.getMethod();
    HttpFields headers = request.getHeaders();
    ByteBuffer body = request.read().getByteBuffer();

    ByteBuffer buffer = handle.request();

    response.write(true, buffer, callback);

    return true;
  }
}
