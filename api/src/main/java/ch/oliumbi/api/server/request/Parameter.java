package ch.oliumbi.api.server.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Parameter {

  private String name;
  private String value;

  // todo add datatype matching include lists
}
