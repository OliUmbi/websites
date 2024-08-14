package ch.oliumbi.api.server;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.eclipse.jetty.http.HttpFields;

public class Headers extends ArrayList<Header> {

  public Headers(Header[] headers) {
    super(List.of(headers));
  }

  public Headers(HttpFields httpFields) {
    super(httpFields.stream()
        .map(httpField -> new Header(httpField.getName(), httpField.getValue()))
        .toList());
  }

  public Optional<Header> get(String name) {
    return this.stream()
        .filter(header -> header.getName().equals(name))
        .findFirst();
  }
}
