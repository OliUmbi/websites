package ch.oliumbi.api.server;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.eclipse.jetty.http.HttpFields;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Header {

  private String name;
  private String value;

  public static List<Header> convert(HttpFields fields) {
    return fields.stream().map(field -> new Header(field.getName(), field.getValue())).toList();
  }
}
