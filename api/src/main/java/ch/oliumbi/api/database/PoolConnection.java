package ch.oliumbi.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Collections;

public class PoolConnection implements AutoCloseable {

  private final Pool pool;
  private final Connection connection;

  public PoolConnection(Pool pool, Connection connection) {
    this.pool = pool;
    this.connection = connection;
  }

  @Override
  public void close() throws Exception {
    pool.offer(connection);
  }

  public PreparedStatement prepareStatement(String query) throws Exception {
    return connection.prepareStatement(query);
  }
}
