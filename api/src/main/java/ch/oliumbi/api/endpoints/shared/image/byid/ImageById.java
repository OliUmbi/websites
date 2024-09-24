package ch.oliumbi.api.endpoints.shared.image.byid;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.enums.ContentType;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Bytes;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Parameters;
import ch.oliumbi.api.server.request.PathVariables;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.ResourceResponse;
import ch.oliumbi.api.server.response.Response;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import javax.imageio.ImageIO;

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
    return List.of("/jublawoma/image/:id");
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {
    UUID id;
    try {
      id = id(request.getPathVariables());
    } catch (Exception e) {
      return new MessageResponse(Status.BAD_REQUEST, "Invalid image id.");
    }

    String root = configuration.string("files.images");
    String size = size(request.getParameters());

    Path path = Path.of(root + "/" + size + "/" + id + ".jpg");

    return new ResourceResponse(Status.OK, path, ContentType.JPEG);
  }

  private UUID id(PathVariables pathVariables) throws Exception {
    Optional<String> idPathVariable = pathVariables.get("id");

    if (idPathVariable.isEmpty()) {
      throw new Exception("Missing path variable id.");
    }

   try {
      return UUID.fromString(idPathVariable.get());
    } catch (IllegalArgumentException e) {
      throw new Exception("Path variable is not a valid id.");
    }
  }

  private String size(Parameters parameters) {

    Optional<String> size = parameters.get("size");

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
