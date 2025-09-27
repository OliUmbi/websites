package ch.oliumbi.api.endpoints.jublawoma.point.changeBySpace;

import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PointChangeBySpaceResponse {

  private UUID id;
  private String name;
  private Integer change;
  private LocalDateTime created;
}
