package ch.oliumbi.api.endpoints.jublawoma.point.changeCreate;

import ch.oliumbi.api.server.Validatable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PointChangeCreateRequest implements Validatable {
  private Integer change;

  @Override
  public boolean valid() {
    return change != null;
  }
}
