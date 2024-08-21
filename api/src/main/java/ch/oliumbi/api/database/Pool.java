package ch.oliumbi.api.database;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.concurrent.ConcurrentLinkedQueue;

@Autoload
public class Pool {

  private static final int TARGET_MAX_SIZE = 4;

  private final ConcurrentLinkedQueue<Connection> available = new ConcurrentLinkedQueue<>();
  private final Configuration configuration;

  public Pool(Configuration configuration) {
    this.configuration = configuration;
  }

  public PoolConnection lease() throws Exception {
    Connection connection = available.poll();

    if (connection == null || isClosed(connection)) {
      connection = create();
    }

    return new PoolConnection(this, connection);
  }

  public void offer(Connection connection) throws Exception {
    if (available.size() > TARGET_MAX_SIZE) {
      close(connection);
      return;
    }

    available.offer(connection);
  }

  private Connection create() throws Exception {
    try {
      return DriverManager.getConnection(
          configuration.string("database.url"),
          configuration.string("database.username"),
          configuration.string("database.password"));
    } catch (Exception e) {
      throw new Exception("Failed to create database connection", e);
    }
  }

  private boolean isClosed(Connection connection) throws Exception {
    try {
      return connection.isClosed();
    } catch (SQLException e) {
      throw new Exception("Failed to determine if database connection is closed", e);
    }
  }

  private void close(Connection connection) throws Exception {
    try {
      connection.close();
    } catch (Exception e) {
      throw new Exception("Failed to close database connection", e);
    }
  }
}
