package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Headers;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.ByteBuffer;
import org.eclipse.jetty.util.BufferUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JsonResponse implements Response {

  private final static Logger LOGGER = LoggerFactory.getLogger(JsonResponse.class);

  private final Status status;
  private final Headers headers;
  private final ByteBuffer body;

  public JsonResponse(Status status, Object body, Header... headers) {
    this.status = status;
    this.headers = new Headers(headers);

    try {
      ObjectMapper objectMapper = new ObjectMapper();
      String json = objectMapper.writeValueAsString(body);

      this.body = BufferUtil.toBuffer(json);
    } catch (Exception e) {
      LOGGER.error("Failed to create json", e);
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
    return ContentType.JSON;
  }

  @Override
  public ByteBuffer getBody() {
    return body;
  }
}
