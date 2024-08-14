package ch.oliumbi.api.server.response;

import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Headers;
import java.nio.ByteBuffer;

public interface Response {

  Status getStatus();

  Headers getHeaders();

  ContentType getContentType();

  ByteBuffer getBody();
}
