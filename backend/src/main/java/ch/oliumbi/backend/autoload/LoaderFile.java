package ch.oliumbi.backend.autoload;

import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class LoaderFile extends Loader {

  @Override
  public String protocol() {
    return "file";
  }

  @Override
  public List<Class<?>> load(ClassLoader classLoader, URL url, String packageName) {
    try (Stream<Path> paths = Files.walk(Paths.get(url.toURI()))) {
      return paths
          .filter(Files::isRegularFile)
          .map(path -> path.toUri().getPath())
          .map(path -> path.replace(url.getPath(), "").replace(".class", "").replace("/", "."))
          .map(className -> packageName + className)
          .map(className -> {
            try {
              return classLoader.loadClass(className);
            } catch (Exception e) {
              throw new RuntimeException("Failed to load classes, reason: class not found, class: " + className, e);
            }
          })
          .collect(Collectors.toList());

    } catch (Exception e) {
      throw new RuntimeException("Failed to load classes, url: " + url, e);
    }
  }
}
