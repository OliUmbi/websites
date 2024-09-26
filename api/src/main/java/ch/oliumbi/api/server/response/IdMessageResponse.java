package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.request.Header;
import java.util.UUID;

public class IdMessageResponse extends JsonResponse {

  public IdMessageResponse(Status status, String message, UUID id, Header... headers) {
    super(status, new IdMessage(message, id), headers);
  }
}
