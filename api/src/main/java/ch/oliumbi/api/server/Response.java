package ch.oliumbi.api.server;

import ch.oliumbi.api.enums.Status;
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
  private String message;
  private T body;

  public Response(Status status, T body) {
    this.status = status;
    this.body = body;
  }

  public Response(Status status, String message) {
    this.status = status;
    this.message = message;
  }
}
