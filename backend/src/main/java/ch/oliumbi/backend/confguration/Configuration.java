package ch.oliumbi.backend.confguration;

import ch.oliumbi.backend.Backend;
import ch.oliumbi.backend.autoload.Autoload;
import ch.oliumbi.backend.enums.Environment;
import java.io.InputStream;
import java.util.Properties;

@Autoload
public class Configuration {

  private final Properties properties;
  private final Environment environment;

  public Configuration() {

    properties = properties();

    String profile = properties.getProperty("profile");

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

  public Integer integer(String key) {
    return Integer.valueOf(string(key));
  }

  private Properties properties() {
    try (InputStream inputStream = Backend.class.getClassLoader().getResourceAsStream("application.properties")) {
      Properties properties = new Properties();

      if (inputStream == null) {
        // todo appliation failed
        throw new RuntimeException("Failed to read properties");
      }

      properties.load(inputStream);

      return properties;
    } catch (Exception e) {
      throw new RuntimeException("Failed to read properties", e);
    }
  }
}
