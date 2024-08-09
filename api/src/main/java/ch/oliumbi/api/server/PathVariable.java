package ch.oliumbi.api.server;

import java.util.Optional;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PathVariable {

  private String name;
  private String value;

  public Optional<String> getString() {
    return Optional.of(value);
  }

  public Optional<Integer> getInteger() {
    try {
      return Optional.of(Integer.valueOf(value));
    } catch (Exception ignored) {
      return Optional.empty();
    }
  }

  public Optional<UUID> getUuid() {
    try {
      return Optional.of(UUID.fromString(value));
    } catch (Exception ignored) {
      return Optional.empty();
    }
  }
}
