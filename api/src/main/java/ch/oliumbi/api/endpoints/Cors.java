package ch.oliumbi.api.endpoints;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.enums.Status;
import ch.oliumbi.api.server.request.Header;
import ch.oliumbi.api.server.response.MessageResponse;
import ch.oliumbi.api.server.response.Response;

@Autoload
public class Cors {

  private final Configuration configuration;

  public Cors(Configuration configuration) {
    this.configuration = configuration;
  }

  public Response response() {
    return new MessageResponse(Status.OK, "Pong.",
        new Header("Access-Control-Allow-Origin", configuration.string("cors.origins")),
        new Header("Access-Control-Allow-Methods", configuration.string("cors.methods")),
        new Header("Access-Control-Allow-Headers", configuration.string("cors.headers")),
        new Header("Access-Control-Max-Age", "86400")
    );
  }
}
