package ch.oliumbi.api.server;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.jetty.http.HttpURI;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Parameter {

  private String name;
  private String value;

  public static List<Parameter> convert(HttpURI uri) throws Exception {
    String query = uri.getQuery();

    if (query == null || query.isBlank()) {
      return Collections.emptyList();
    }

    String[] pairs = query.split("&");
    List<Parameter> parameters = new ArrayList<>();

    for (String pair : pairs) {
      if (pair.isBlank()) {
        continue;
      }

      String[] split1 = pair.split("=");

      if (split1.length != 2) {
        throw new Exception("Failed to handle request, reason: parameter malformed, parameter: " + pair);
      }

      parameters.add(new Parameter(split1[0], split1[1]));
    }

    return parameters;
  }
}
