package ch.oliumbi.api.server.request;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PathVariable {

  private String name;
  private String value;

  // todo add datatype matching
}
