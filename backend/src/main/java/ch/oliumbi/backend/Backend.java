package ch.oliumbi.backend;

import ch.oliumbi.backend.autoload.Autoloader;
import ch.oliumbi.backend.autoload.Factory;
import ch.oliumbi.backend.confguration.Configuration;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

public class Backend {

  public static void main(String[] args) {
    Autoloader autoloader = new Autoloader(Backend.class);
    Factory factory = autoloader.load();

    factory.all().forEach(System.out::println);
  }
}
