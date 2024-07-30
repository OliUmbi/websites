package ch.oliumbi.backend.autoload;

import java.net.JarURLConnection;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;

public class LoaderJar extends Loader {

  @Override
  public String protocol() {
    return "jar";
  }

  @Override
  public List<Class<?>> classes(ClassLoader classLoader, URL url, String packageName) {
    try {
      if (url.openConnection() instanceof JarURLConnection jarURLConnection) {
        return jarURLConnection.getJarFile().stream()
            .filter(jarEntry -> !jarEntry.isDirectory())
            .map(ZipEntry::getName)
            .filter(className -> className.startsWith(packageName.replace(".", "/")))
            .map(className -> className.replace(".class", "").replace("/", "."))
            .map(className -> {
              try {
               return classLoader.loadClass(className);
              } catch (Exception e) {
                throw new RuntimeException("Class not found, class: " + className, e);
              }
            }).collect(Collectors.toList());
      } else {
        throw new RuntimeException("Not a JarUrlConnection");
      }
    } catch (Exception e) {
      throw new RuntimeException("Failed to load class, url: " + url, e);
    }
  }
}
