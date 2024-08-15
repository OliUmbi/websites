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
}
