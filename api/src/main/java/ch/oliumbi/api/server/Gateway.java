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
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.Callback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Gateway extends Handler.Abstract {

  public static final Logger LOGGER = LoggerFactory.getLogger(Gateway.class);
  private final Yeet yeet;

  public Gateway(Yeet yeet) {
    this.yeet = yeet;
  }

  @Override
  public boolean handle(Request request, Response response, Callback callback) {
    try {
      ch.oliumbi.api.server.Response<?> internal = yeet.yeet();

      response.setStatus(internal.getStatus().getCode());
      for (Header header : internal.getHeaders()) {
        response.getHeaders().add(header.getName(), header.getValue());
      }

      ByteBuffer body = internal.getBuffer();
      if (body != null) {
        response.getHeaders().add("Content-Type", internal.getContentType().toString());
        response.write(true, body, callback);
      }
    } catch (Exception e) {
      LOGGER.error("Exception in gateway handle", e);
      response.reset();
      response.setStatus(Status.INTERNAL_SERVER_ERROR.getCode());
    }

    return true;
  }
}
