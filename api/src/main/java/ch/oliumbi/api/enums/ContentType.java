package ch.oliumbi.api.enums;

public enum ContentType {
  JSON,
  PNG,
  JPEG,
  SVG,
  PDF;

  @Override
  public String toString() {
    switch (this) {
      case JSON -> {
        return "application/json; charset=UTF-8";
      }
      case PDF -> {
        return "application/pdf";
      }
      case PNG -> {
        return "image/png";
      }
      case JPEG -> {
        return "image/jpeg";
      }
      case SVG -> {
        return "image/svg+xml";
      }
    }

    return null;
  }
}
