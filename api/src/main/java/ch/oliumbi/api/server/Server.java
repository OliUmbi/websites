package ch.oliumbi.api.server;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import org.eclipse.jetty.server.HttpConfiguration;
import org.eclipse.jetty.server.HttpConnectionFactory;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.server.handler.gzip.GzipHandler;

@Autoload
public class Server {

  private final Configuration configuration;
  private final ServerHandler serverHandler;

  public Server(Configuration configuration, ServerHandler serverHandler) {
    this.configuration = configuration;
    this.serverHandler = serverHandler;

    start();
  }

  public void start() {

    org.eclipse.jetty.server.Server server = new org.eclipse.jetty.server.Server();

    HttpConfiguration httpConfiguration = new HttpConfiguration();
    httpConfiguration.setSendServerVersion(false);

    HttpConnectionFactory httpConnectionFactory = new HttpConnectionFactory(httpConfiguration);

    ServerConnector serverConnector = new ServerConnector(server, httpConnectionFactory);
    serverConnector.setPort(configuration.integer("server.port"));

    server.addConnector(serverConnector);

    GzipHandler gzipHandler = new GzipHandler();
    gzipHandler.setMinGzipSize(1024);
    gzipHandler.setHandler(serverHandler);

    server.setHandler(gzipHandler);

    try {
      server.start();
    } catch (Exception e) {
      // todo
      throw new RuntimeException(e);
    }
  }
}
