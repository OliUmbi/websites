package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.request.Header;

public class PaginationResponse extends JsonResponse {

  public <T> PaginationResponse(Status status, T value, Long total, Header... headers) {
    super(status, new Pagination<T>(value, total), headers);
  }
}
