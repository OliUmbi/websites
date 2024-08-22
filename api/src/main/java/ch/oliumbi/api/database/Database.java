package ch.oliumbi.api.database;

import ch.oliumbi.api.autoload.Autoload;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.DriverManager;
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

  // todo error handling
  // todo update

  public <T> Optional<List<T>> query(Class<T> clazz, String query, Object... params) {
    try (PoolConnection poolConnection = pool.lease()) {
      List<String> inputs = getInputs(query);
      List<String> outputs = getOutputs(query);

      query = replaceInputs(query);
      query = removeOutput(query);

      try (PreparedStatement preparedStatement = poolConnection.prepareStatement(query)) {
        setInputs(preparedStatement, inputs, params);

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
          List<T> results = getResults(resultSet, outputs, clazz);

          return Optional.of(results);
        } catch (Exception e) {
          e.printStackTrace();
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    } catch (Exception e) {
      e.printStackTrace();
    }

    return Optional.empty();
  }

  public Optional<List<Row>> query(String query, Object... params) {
    try (PoolConnection poolConnection = pool.lease()) {
      List<String> inputs = getInputs(query);

      query = replaceInputs(query);

      try (PreparedStatement preparedStatement = poolConnection.prepareStatement(query)) {
        setInputs(preparedStatement, inputs, params);

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
          List<Row> rows = getRows(resultSet);

          return Optional.of(rows);
        } catch (Exception e) {
          e.printStackTrace();
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    } catch (Exception e) {
      e.printStackTrace();
    }

    return Optional.empty();
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
    // todo implement

    return Optional.empty();
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

  private void setInputs(PreparedStatement preparedStatement, List<String> inputs, Object[] params) {
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

  private <T> List<T> getResults(ResultSet resultSet, List<String> outputs, Class<T> clazz) {
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

  private List<Row> getRows(ResultSet resultSet) {
    List<Row> rows = new ArrayList<>();

    while (resultSet.next()) {
      rows.add(new Row(resultSet));
    }

    return rows;
  }
}
