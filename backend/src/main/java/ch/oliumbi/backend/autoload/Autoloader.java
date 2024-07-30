package ch.oliumbi.backend.autoload;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Autoloader {

  public static final Logger LOGGER = LoggerFactory.getLogger(Autoloader.class);

  private final Factory factory = new Factory();
  private final Class<?> rootClass;

  public Autoloader(Class<?> rootClass) {
    this.rootClass = rootClass;
  }

  public List<Object> load() {
    List<Class<?>> allClasses = allClasses();

    List<Class<?>> annotatedClasses = annotatedClasses(allClasses);

    return annotatedClasses.stream().map(factory::instantiate).toList();
  }

  private List<Class<?>> allClasses() {
    ClassLoader classLoader = rootClass.getClassLoader();
    String packageName = rootClass.getPackageName();
    URL url = classLoader.getResource(packageName.replace(".", "/"));

    if (url == null) {
      throw new RuntimeException("Failed to create url of project root for autoloader");
    }

    List<Loader> loaders = List.of(
        new LoaderFile(),
        new LoaderJar()
    );

    List<Class<?>> classes = new ArrayList<>();

    for (Loader loader : loaders) {
      if (url.getProtocol().equals(loader.protocol())) {
        classes.addAll(loader.classes(classLoader, url, packageName));
      }
    }

    return classes;
  }

  private List<Class<?>> annotatedClasses(List<Class<?>> classes) {
    return classes.stream()
        .filter(aClass -> aClass.isAnnotationPresent(Autoload.class))
        .toList();
  }
}
