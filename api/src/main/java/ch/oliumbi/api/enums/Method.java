package ch.oliumbi.api.enums;

public enum Method {
  GET,
  POST,
  PUT,
  DELETE,
  OPTIONS,
  HEAD;

  public static Method convert(String string) throws Exception {
    try {
      return Method.valueOf(string);
    } catch (IllegalArgumentException ignored) {
      throw new Exception("Failed to handle request, reason: unsupported method, method: " + string);
    }
  }
}
