package ch.oliumbi.api.endpoints.jublawomaadmin.image;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Bytes;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.Transparency;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import javax.imageio.ImageIO;

@Autoload
public class ImageCreate implements Endpoint<Bytes> {

  private final Configuration configuration;
  private final Database database;

  public ImageCreate(Configuration configuration, Database database) {
    this.configuration = configuration;
    this.database = database;
  }

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

    UUID id = UUID.randomUUID();

    try {
      String root = configuration.string("files.images");

      Path pathXl = Path.of(root + "/xl/" + id + ".jpg");
      Path pathL = Path.of(root + "/l/" + id + ".jpg");
      Path pathM = Path.of(root + "/m/" + id + ".jpg");
      Path pathS = Path.of(root + "/s/" + id + ".jpg");
      Path pathXs = Path.of(root + "/xs/" + id + ".jpg");

      Files.createDirectories(pathXl.getParent());
      Files.createDirectories(pathL.getParent());
      Files.createDirectories(pathM.getParent());
      Files.createDirectories(pathS.getParent());
      Files.createDirectories(pathXs.getParent());

      Files.write(pathXl, scale(request.getBody().getData(), 1600));
      Files.write(pathL, scale(request.getBody().getData(), 1280));
      Files.write(pathM, scale(request.getBody().getData(), 960));
      Files.write(pathS, scale(request.getBody().getData(), 640));
      Files.write(pathXs, scale(request.getBody().getData(), 320));
    } catch (Exception e) {
      e.printStackTrace();
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to save image");
    }

    Optional<Integer> rows = database.update("""
            INSERT INTO shared_image (
                    id)
            VALUES (
                    :id)
            """,
        Param.of("id", id));

    if (rows.isEmpty() || rows.get() != 1) {
      return new MessageResponse(Status.INTERNAL_SERVER_ERROR, "Failed to save image.");
    }

    return new MessageResponse(Status.OK, id.toString());
  }

  private byte[] scale(byte[] bytes, int width) throws Exception {
    BufferedImage original = ImageIO.read(new ByteArrayInputStream(bytes));

    if (original == null) {
      throw new Exception("Failed to read image.");
    }

    int height = (int) ((double) original.getHeight() / original.getWidth() * width);

    BufferedImage scaledImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
    Graphics2D g2d = scaledImage.createGraphics();

    g2d.setPaint(Color.WHITE);
    g2d.fillRect(0, 0, width, height);

    g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC);
    g2d.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
    g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

    g2d.drawImage(original, 0, 0, width, height, null);
    g2d.dispose();

    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    ImageIO.write(scaledImage, "jpg", outputStream);
    return outputStream.toByteArray();
  }
}
