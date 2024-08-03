package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.confguration.Configuration;
import java.util.List;

@Autoload
public class Server {

  private final Configuration configuration;
  private final List<Endpoint<?, ?>> endpoints;

  public Server(Configuration configuration, Endpoint<?, ?>[] endpoints) {
    this.configuration = configuration;
     this.endpoints = List.of(endpoints);

    for (Endpoint<?, ?> endpoint : endpoints) {
      endpoint.getClass().
      endpoint.handle(null);
    }

  }

  public void start() {

  }

}
