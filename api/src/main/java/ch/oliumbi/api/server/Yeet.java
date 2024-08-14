package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.nio.ByteBuffer;
import org.eclipse.jetty.server.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Yeet {

  private final static Logger LOGGER = LoggerFactory.getLogger(Yeet.class);

  private final Handle handle;

  public Yeet(Handle handle) {
    this.handle = handle;
  }

  public Response yeet(Request request) {
    Meta meta;
    try {
      meta = Meta.convert(request.getConnectionMetaData());
    } catch (Exception e) {
      LOGGER.error("Failed to convert meta", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }

    Method method;
    try {
      method = Method.convert(request.getMethod());
    } catch (Exception e) {
      LOGGER.error("Failed to convert method", e);
      return new MessageResponse(Status.BAD_REQUEST, "Method is unsupported.");
    }

    Path path;
    try {
      path = new Path(request.getHttpURI());
    } catch (Exception e) {
      LOGGER.error("Failed to convert path", e);
      return new MessageResponse(Status.BAD_REQUEST, "Url is malformed.");
    }

    Headers headers;
    try {
      headers = new Headers(request.getHeaders());
    } catch (Exception e) {
      LOGGER.error("Failed to convert headers", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }

    ByteBuffer buffer;
    try {
      buffer = request.read().getByteBuffer();
    } catch (Exception e) {
      LOGGER.error("Failed to read body", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }

    try {
      return handle.request(meta, method, path, headers, buffer);
    } catch (Exception e) {
      LOGGER.error("Failed to handle request", e);
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to handle request.");
    }
  }
}
