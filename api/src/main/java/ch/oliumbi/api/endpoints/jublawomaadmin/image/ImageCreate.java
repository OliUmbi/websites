package ch.oliumbi.api.endpoints.jublawomaadmin.image;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Bytes;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ImageCreate implements Endpoint<Bytes> {

  @Override
  public Method method() {
    return Method.POST;
  }

  @Override
  public String route() {
    return "/jublawoma-admin/image";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Bytes> request) {

    Optional<Header> contentType = request.getHeaders().get("Content-Type");

    if (contentType.isEmpty() || !contentType.get().getValue().startsWith("image/")) {
      return new MessageResponse(Status.BAD_REQUEST, "Missing or unsupported Content-Type.");
    }

    File file = new File(UUID.randomUUID() + ".jpg");
    try {
      Files.write(file.toPath(), request.getBody().getData());
    } catch (IOException e) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to save image");
    }

    return new MessageResponse(Status.OK, "Successfully created image");
  }
}
