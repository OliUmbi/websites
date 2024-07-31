package ch.oliumbi.backend.autoload;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class Autoloader {

  private final List<Loader> loaders = List.of(
      new LoaderFile(),
      new LoaderJar()
  );
  private final Class<?> rootClass;

  public Autoloader(Class<?> rootClass) {
    this.rootClass = rootClass;
  }

  public Factory load() {
    List<Class<?>> allClasses = allClasses();

    List<Class<?>> annotatedClasses = annotatedClasses(allClasses);

    return new Factory(annotatedClasses);
  }

  private List<Class<?>> allClasses() {
    ClassLoader classLoader = rootClass.getClassLoader();
    String packageName = rootClass.getPackageName();
    URL url = classLoader.getResource(packageName.replace(".", "/"));

    if (url == null) {
      throw new RuntimeException("Failed to create url of project root for autoloader");
    }

    List<Class<?>> allClasses = new ArrayList<>();
    for (Loader loader : loaders) {
      if (url.getProtocol().equals(loader.protocol())) {
        allClasses.addAll(loader.load(classLoader, url, packageName));
      }
    }

    return allClasses;
  }

  private List<Class<?>> annotatedClasses(List<Class<?>> classes) {
    return classes.stream()
        .filter(aClass -> aClass.isAnnotationPresent(Autoload.class))
        .toList();
  }
}
