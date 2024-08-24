package ch.oliumbi.api.database;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.server.EndpointHandler;
import java.lang.reflect.Field;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Database {

  private static final Logger LOGGER = LoggerFactory.getLogger(Database.class);

  private final Pool pool;

  public Database(Pool pool) {
    this.pool = pool;
  }

  public <T> Optional<List<T>> query(Class<T> clazz, String query, Object... params) {
    try (PoolConnection poolConnection = pool.lease()) {
      List<String> inputs = getInputs(query);
      List<String> outputs = getOutputs(query);

      query = replaceInputs(query);
      query = removeOutput(query);

      try (PreparedStatement preparedStatement = poolConnection.prepareStatement(query)) {
        try {
          setInputs(preparedStatement, inputs, params);
        } catch (Exception e) {
          LOGGER.error("Failed to set inputs on prepared statement", e);
          return Optional.empty();
        }

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
          List<T> results;
          try {
            results = getResults(resultSet, outputs, clazz);
          } catch (Exception e) {
            LOGGER.error("Failed to get results from result set and map to class", e);
            return Optional.empty();
          }

          return Optional.of(results);
        } catch (Exception e) {
          LOGGER.error("Failed to execute query", e);
          return Optional.empty();
        }
      } catch (Exception e) {
        LOGGER.error("Failed to create prepared statement for query", e);
        return Optional.empty();
      }
    } catch (Exception e) {
      LOGGER.error("Failed to lease connection from pool", e);
      return Optional.empty();
    }
  }

  public Optional<List<Row>> query(String query, Object... params) {
    try (PoolConnection poolConnection = pool.lease()) {
      List<String> inputs = getInputs(query);

      query = replaceInputs(query);

      try (PreparedStatement preparedStatement = poolConnection.prepareStatement(query)) {
        try {
          setInputs(preparedStatement, inputs, params);
        } catch (Exception e) {
          LOGGER.error("Failed to set inputs on prepared statement", e);
          return Optional.empty();
        }

        try (ResultSet resultSet = preparedStatement.executeQuery()) {

          List<Row> rows;
          try {
            rows = getRows(resultSet);
          } catch (Exception e) {
            LOGGER.error("Failed to get rows from result set", e);
            return Optional.empty();
          }

          return Optional.of(rows);
        } catch (Exception e) {
          LOGGER.error("Failed to execute query", e);
          return Optional.empty();
        }
      } catch (Exception e) {
        LOGGER.error("Failed to create prepared statement for query", e);
        return Optional.empty();
      }
    } catch (Exception e) {
      LOGGER.error("Failed to lease connection from pool", e);
      return Optional.empty();
    }
  }

  public <T> Optional<T> querySingle(Class<T> clazz, String query, Object... params) {
    Optional<List<T>> results = query(clazz, query, params);

    if (results.isEmpty()) {
      return Optional.empty();
    }

    if (results.get().isEmpty()) {
      return Optional.empty();
    }

    return Optional.of(results.get().getFirst());
  }

  public Optional<Row> querySingle(String query, Object... params) {
    Optional<List<Row>> results = query(query, params);

    if (results.isEmpty()) {
      return Optional.empty();
    }

    if (results.get().isEmpty()) {
      return Optional.empty();
    }

    return Optional.of(results.get().getFirst());
  }

  public Optional<Integer> update(String query, Object... params) {
    try (PoolConnection poolConnection = pool.lease()) {
      List<String> inputs = getInputs(query);

      query = replaceInputs(query);

      try (PreparedStatement preparedStatement = poolConnection.prepareStatement(query)) {
        try {
          setInputs(preparedStatement, inputs, params);
        } catch (Exception e) {
          LOGGER.error("Failed to set inputs on prepared statement", e);
          return Optional.empty();
        }

        try {
          return Optional.of(preparedStatement.executeUpdate());
        } catch (Exception e) {
          LOGGER.error("Failed to execute update", e);
          return Optional.empty();
        }
      } catch (Exception e) {
        LOGGER.error("Failed to create prepared statement for update", e);
        return Optional.empty();
      }
    } catch (Exception e) {
      LOGGER.error("Failed to lease connection from pool", e);
      return Optional.empty();
    }
  }

  private List<String> getInputs(String query) {
    Pattern inputPattern = Pattern.compile("(?<=:)(\\w+)");
    Matcher inputMatcher = inputPattern.matcher(query);

    List<String> inputs = new ArrayList<>();
    while (inputMatcher.find()) {
      inputs.add(inputMatcher.group(1));
    }

    return inputs;
  }

  private String replaceInputs(String query) {
    return query.replaceAll("(:\\w+)", "?");
  }

  private List<String> getOutputs(String query) {
    Pattern outputPattern = Pattern.compile("(?<=INTO [\\s\\S]*)(\\w+)");
    Matcher outputMatcher = outputPattern.matcher(query);

    List<String> outputs = new ArrayList<>();
    while (outputMatcher.find()) {
      outputs.add(outputMatcher.group(1));
    }

    return outputs;
  }

  private String removeOutput(String query) {
    return query.replaceAll("INTO [\\s\\S]*", "");
  }

  private void setInputs(PreparedStatement preparedStatement, List<String> inputs, Object[] params) throws Exception {
    for (int i = 0; i < inputs.size(); i++) {
      for (Object param : params) {
        if (param instanceof Param param1) {
          if (param1.getName().equals(inputs.get(i))) {
            preparedStatement.setObject(i + 1, param1.getValue());
          }
        } else {
          for (Field declaredField : param.getClass().getDeclaredFields()) {
            if (declaredField.getName().equals(inputs.get(i)) && declaredField.trySetAccessible()) {
              preparedStatement.setObject(i + 1, declaredField.get(param));
            }
          }
        }
      }
    }
  }

  private <T> List<T> getResults(ResultSet resultSet, List<String> outputs, Class<T> clazz) throws Exception {
    List<T> results = new ArrayList<>();

    while (resultSet.next()) {
      T instance = clazz.getDeclaredConstructor().newInstance();

      for (int i = 0; i < outputs.size(); i++) {
        for (Field declaredField : clazz.getDeclaredFields()) {
          if (declaredField.getName().equals(outputs.get(i)) && declaredField.trySetAccessible()) {
            declaredField.set(instance, resultSet.getObject(i + 1));
          }
        }
      }

      results.add(instance);
    }

    return results;
  }

  private List<Row> getRows(ResultSet resultSet) throws Exception {
    List<Row> rows = new ArrayList<>();

    while (resultSet.next()) {
      rows.add(new Row(resultSet));
    }

    return rows;
  }
}
