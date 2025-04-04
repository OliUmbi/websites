package ch.oliumbi.api.endpoints.shared.image.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.enums.server.ContentType;
import ch.oliumbi.api.enums.server.Method;
import ch.oliumbi.api.enums.shared.SharedAccountPermissionPermission;
import ch.oliumbi.api.enums.server.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Parameters;
import ch.oliumbi.api.server.request.PathVariables;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.ResourceResponse;
import ch.oliumbi.api.server.response.Response;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Autoload
public class ImageById implements Endpoint<Void> {

  private final Configuration configuration;

  public ImageById(Configuration configuration) {
    this.configuration = configuration;
  }

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public List<String> routes() {
    return List.of(
        "/jublawoma/image/:id",
        "/jublawoma-admin/image/:id",
        "/unclet/image/:id",
        "/unclet-admin/image/:id",
        "/oliumbi/image/:id",
        "/oliumbi-admin/image/:id"
    );
  }

  @Override
  public List<SharedAccountPermissionPermission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {
    Optional<UUID> id = request.getPathVariables().getUUID("id");

    if (id.isEmpty()) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid id.");
    }

    String root = configuration.string("files.images");
    String size = size(request.getParameters());

    Path path = Path.of(root + "/" + size + "/" + id.get() + ".jpg");

    return new ResourceResponse(Status.OK, path, ContentType.JPEG, new Header("Cache-Control", "max-age=31536000"));
  }

  private String size(Parameters parameters) {

    Optional<String> size = parameters.getString("size");

    if (size.isEmpty()) {
      return "xl";
    }

    return switch (size.get()) {
      case "xl" -> "xl";
      case "l" -> "l";
      case "m" -> "m";
      case "s" -> "s";
      case "xs" -> "xs";
      default -> "xl";
    };
  }
}
