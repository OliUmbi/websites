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

  public static final Logger LOGGER = LoggerFactory.getLogger(Database.class);

  // todo error handling
  // todo support key value map
  // todo update
  // todo generic param (Param.from("key", value))

  public <T> Optional<List<T>> query(Class<T> clazz, String query, Object... params) {
    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/sql", "sql", "sql")) {
      List<String> inputs = getInputs(query);
      List<String> outputs = getOutputs(query);

      query = replaceInputs(query);
      query = removeOutput(query);

      try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
        for (int i = 0; i < inputs.size(); i++) {
          for (Object param : params) {
            for (Field declaredField : param.getClass().getDeclaredFields()) {
              if (declaredField.getName().equals(inputs.get(i)) && declaredField.trySetAccessible()) {
                preparedStatement.setObject(i + 1, declaredField.get(param));
              }
            }
          }
        }

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
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

  public <T> Optional<T> querySingle(Class<T> clazz, String query, Object... params) {
    Optional<List<T>> result = query(clazz, query, params);

    if (result.isEmpty()) {
      return Optional.empty();
    }

    if (result.get().isEmpty()) {
      return Optional.empty();
    }

    return Optional.of(result.get().getFirst());
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
}
