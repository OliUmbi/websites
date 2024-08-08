package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.Callback;

@Autoload
public class Gateway extends Handler.Abstract {

  private final Handle handle;

  public Gateway(Handle handle) {
    this.handle = handle;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {
    // todo handle unsupported methods
    // todo handle exceptions
    // todo determine where validation happens?

    String ip = request.getConnectionMetaData().getRemoteSocketAddress().toString();
    String url = request.getHttpURI().getDecodedPath();
    List<Parameter> parameters = Arrays.stream(request.getHttpURI().getQuery().split("&")).map(s -> s.split("=")).map(strings -> new Parameter(strings[0], strings[1])).collect(
        Collectors.toList());
    Method method = Method.valueOf(request.getMethod());
    List<Header> headers = request.getHeaders().stream().map(httpField -> new Header(httpField.getName(), httpField.getValue())).toList();
    ByteBuffer body = request.read().getByteBuffer();

    ByteBuffer buffer = handle.request(ip, method, url, parameters, headers, body);

    response.write(true, buffer, callback);

    return true;
  }
}
