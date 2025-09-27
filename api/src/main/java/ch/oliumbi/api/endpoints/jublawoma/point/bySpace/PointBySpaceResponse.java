package ch.oliumbi.api.endpoints.jublawoma.point.bySpace;

import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PointBySpaceResponse {

  private UUID id;
  private String name;
  private String code;
  private Long points;
}
