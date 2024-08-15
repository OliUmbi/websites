package ch.oliumbi.api.server;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.jetty.http.HttpURI;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Path {

  private String url;

  public Path(HttpURI httpURI) {
    this.url = httpURI.getDecodedPath();
  }

  public boolean matches(String route) {
    String[] routeParts = route.split("/");
    String[] urlParts = url.split("/");

    if (routeParts.length != urlParts.length) {
      return false;
    }

    for (int i = 0; i < routeParts.length; i++) {
      String routePart = routeParts[i];
      String urlPart = urlParts[i];

      if (routePart.startsWith(":")) {
        continue;
      }

      if (!routePart.equals(urlPart)) {
        return false;
      }
    }

    return true;
  }
}
