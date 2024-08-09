package ch.oliumbi.api;

import ch.oliumbi.api.autoload.Autoloader;
import ch.oliumbi.api.autoload.Factory;

public class Api {

  public static void main(String[] args) {
    Autoloader autoloader = new Autoloader(Api.class);
    autoloader.load();
  }
}
