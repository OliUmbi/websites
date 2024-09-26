package ch.oliumbi.api.enums.server;

public enum Status {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR;

  public int getCode() {
    switch (this) {
      case OK -> {
        return 200;
      }
      case BAD_REQUEST -> {
        return 400;
      }
      case UNAUTHORIZED -> {
        return 401;
      }
      case FORBIDDEN -> {
        return 403;
      }
      case INTERNAL_SERVER_ERROR -> {
        return 500;
      }
      default -> {
        return 418;
      }
    }
  }
}
