package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.server.ContentType;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.request.Headers;
import java.nio.ByteBuffer;

public interface Response {

  Status getStatus();

  Headers getHeaders();

  ContentType getContentType();

  ByteBuffer getBody();
}
