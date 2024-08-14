package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Header;
import ch.oliumbi.api.server.Message;

public class MessageResponse extends JsonResponse {

  public MessageResponse(Status status, String message, Header... headers) {
    super(status, new Message(message), headers);
  }
}
