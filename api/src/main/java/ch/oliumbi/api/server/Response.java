package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Status;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

  public Object getContent() {
    if (message != null) {
      return message;
    }

    return body;
  }
}
