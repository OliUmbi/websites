package ch.oliumbi.backend.server;

import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.confguration.Configuration;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.ServerConnector;

@Autoload
public class Server {

  private final Configuration configuration;
  private final Gateway gateway;

  public Server(Configuration configuration, Gateway gateway) {
    this.configuration = configuration;
    this.gateway = gateway;

    start();
  }

  public void start() {

    org.eclipse.jetty.server.Server server = new org.eclipse.jetty.server.Server();
    ServerConnector serverConnector = new ServerConnector(server);
    serverConnector.setPort(configuration.integer("server.port"));
    server.addConnector(serverConnector);

    server.setHandler(gateway);

    try {
      server.start();
    } catch (Exception e) {
      // todo
      throw new RuntimeException(e);
    }
  }
}
