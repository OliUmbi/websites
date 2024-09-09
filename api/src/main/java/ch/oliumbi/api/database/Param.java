package ch.oliumbi.api.database;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Param {

  private String name;
  private Object value;

  private Param(String name, Object value) {
    this.name = name;
    this.value = value;
  }

  public static Param of(String name, Object value) {
    return new Param(name, value);
  }
}
