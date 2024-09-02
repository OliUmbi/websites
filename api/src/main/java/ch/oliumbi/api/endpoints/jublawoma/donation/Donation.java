package ch.oliumbi.api.endpoints.jublawoma.donation;

import ch.oliumbi.api.enums.Method;
import ch.oliumbi.api.enums.Permission;
import ch.oliumbi.api.server.Endpoint;
import ch.oliumbi.api.server.request.Request;
import ch.oliumbi.api.server.response.Response;
import java.util.List;
import jdk.jfr.Enabled;

public class Donation implements Endpoint<Void> {

  @Override
  public Method method() {
    return Method.GET;
  }

  @Override
  public String route() {
    return "/jublawoma/donation";
  }

  @Override
  public List<Permission> permissions() {
    return List.of();
  }

  @Override
  public Response handle(Request<Void> request) {
    // todo implement

    return null;
  }
}
