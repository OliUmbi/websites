package ch.oliumbi.api.confguration;

import ch.oliumbi.api.Api;
import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.enums.Environment;
import ch.oliumbi.api.server.ServerHandler;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class Configuration {

  private static final Logger LOGGER = LoggerFactory.getLogger(Configuration.class);
  private final Properties properties;
  private final Environment environment;

  public Configuration() {
    this.properties = properties();

    String profile = properties.getProperty("profile");
    LOGGER.info("Active profile: {}", profile);

    switch (profile) {
      case "development":
        environment = Environment.DEVELOPMENT;
        break;
      case "production":
        environment = Environment.PRODUCTION;
        break;
      case "undefined":
        throw new RuntimeException("No maven profile configured");
      default:
        throw new RuntimeException("Unsupported maven profile: " + profile);
    }
  }

  public String string(String key) {
    String prefix = environment.name().toLowerCase() + ".";

    String property = properties.getProperty(prefix + key);

    if (property.startsWith("#")) {
      property = System.getenv(property.substring(1));
    }

    return property;
  }

  public List<String> strings(String key) {
    return List.of(string(key).split(","));
  }

  public Integer integer(String key) {
    return Integer.valueOf(string(key));
  }

  public List<Integer> integers(String key) {
    return strings(key).stream().map(Integer::valueOf).toList();
  }

  private Properties properties() {
    try (InputStream inputStream = Api.class.getClassLoader().getResourceAsStream("application.properties")) {
      Properties properties = new Properties();
      properties.load(inputStream);

      return properties;
    } catch (Exception e) {
      throw new RuntimeException("Failed to read properties", e);
    }
  }
}
