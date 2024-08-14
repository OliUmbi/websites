package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.nio.ByteBuffer;
import java.nio.file.Path;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.resource.PathResource;
import org.eclipse.jetty.util.resource.PathResourceFactory;
import org.eclipse.jetty.util.resource.Resource;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Response<T> {

  private Status status;
  private ContentType contentType;
  private Message message;
  private T body;
  private List<Header> headers;

  public Response(Status status, Header... headers) {
    this.status = status;
    this.contentType = ContentType.Void;
    this.message = null;
    this.body = null;
    this.headers = List.of(headers);
  }

  public Response(Status status, ContentType contentType, T body, Header... headers) {
    this.status = status;
    this.contentType = contentType;
    this.message = null;
    this.body = body;
    this.headers = List.of(headers);
  }

  public Response(Status status, String message, Header... headers) {
    this.status = status;
    this.contentType = ContentType.JSON;
    this.message = new Message(message);
    this.body = null;
    this.headers = List.of(headers);
  }

  public Object getBody() {
    if (message != null) {
      return message;
    }

    return body;
  }

  public ByteBuffer getBuffer() throws Exception {
    Object value = getBody();

    if (value == null) {
      return null;
    }

    if (value instanceof byte[] bytes) {
      return BufferUtil.toBuffer(bytes);
    }

    if (value instanceof URI uri) {
      return BufferUtil.toMappedBuffer(Path.of(uri));
    }

    ObjectMapper objectMapper = new ObjectMapper();
    String json = objectMapper.writeValueAsString(value);

    return BufferUtil.toBuffer(json);
  }
}
