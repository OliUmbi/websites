package ch.oliumbi.api.server;

import ch.oliumbi.api.server.request.Header;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.Callback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServerHandler extends Handler.Abstract {

  public static final Logger LOGGER = LoggerFactory.getLogger(ServerHandler.class);

  private final EndpointHandler endpointHandler;

  public ServerHandler(EndpointHandler endpointHandler) {
    this.endpointHandler = endpointHandler;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {

    ch.oliumbi.api.server.response.Response internal = endpointHandler.request(
        request.getConnectionMetaData(),
        request.getMethod(),
        request.getHttpURI(),
        request.getHeaders(),
        request.read().getByteBuffer()
    );

    response.setStatus(internal.getStatus().getCode());

    for (Header header : internal.getHeaders()) {
      response.getHeaders().add(header.getName(), header.getValue());
    }
    response.getHeaders().add("Content-Type", internal.getContentType().toString());

    response.write(true, internal.getBody(), callback);

    return true;
  }
}
