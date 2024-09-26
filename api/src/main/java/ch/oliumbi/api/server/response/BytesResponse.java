package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.server.ContentType;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Headers;
import java.nio.ByteBuffer;
import org.eclipse.jetty.util.BufferUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BytesResponse implements Response {

  private final static Logger LOGGER = LoggerFactory.getLogger(BytesResponse.class);

  private final Status status;
  private final Headers headers;
  private final ContentType contentType;
  private final ByteBuffer body;

  public BytesResponse(Status status, byte[] bytes, ContentType contentType, Header... headers) {
    this.status = status;
    this.contentType = contentType;
    this.headers = new Headers(headers);

    try {
      this.body = BufferUtil.toBuffer(bytes);
    } catch (Exception e) {
      LOGGER.error("Failed to create buffer of byte array", e);
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
