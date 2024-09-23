package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Headers;
import java.nio.ByteBuffer;
import java.nio.file.Path;
import org.eclipse.jetty.util.BufferUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResourceResponse implements Response {

  private final static Logger LOGGER = LoggerFactory.getLogger(ResourceResponse.class);

  private final Status status;
  private final Headers headers;
  private final ContentType contentType;
  private final ByteBuffer body;

  public ResourceResponse(Status status, Path path, ContentType contentType, Header... headers) {
    this.status = status;
    this.contentType = contentType;
    this.headers = new Headers(headers);

    try {
      this.body = BufferUtil.toMappedBuffer(path);
    } catch (Exception e) {
      LOGGER.error("Failed to create buffer of resource", e);
      throw new RuntimeException("Failed to create response.");
    }
  }

  @Override
  public Status getStatus() {
    return status;
  }

  @Override
  public Headers getHeaders() {
    return headers;
  }

  @Override
  public ContentType getContentType() {
    return contentType;
  }

  @Override
  public ByteBuffer getBody() {
    return body;
  }
}
