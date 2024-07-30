package ch.oliumbi.backend;

import ch.oliumbi.backend.confguration.Configuration;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

public class Backend {

  public static void main(String[] args) {
    Configuration configuration = new Configuration();

    System.out.println(configuration.string("database.host"));
    System.out.println(configuration.string("database.password"));
    System.out.println(configuration.integer("database.port") == 5432);
  }
}
