package ch.oliumbi.api.autoload;

import java.net.URL;
import java.util.List;

public abstract class Loader {

  public abstract String protocol();

  public abstract List<Class<?>> load(ClassLoader classLoader, URL url, String packageName);
}
