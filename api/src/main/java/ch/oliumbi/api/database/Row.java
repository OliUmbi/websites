package ch.oliumbi.api.database;

import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Optional;

public class Row extends HashMap<String, Object> {

  public Row(ResultSet resultSet) throws Exception {
    super(resultSet.getMetaData().getColumnCount());

    for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
      put(resultSet.getMetaData().getColumnName(i), resultSet.getObject(i));
    }
  }

  // todo is this good? since there should be no type change the application should fail if there is one. or i just implement optionals for everything
  // todo [error handling] who logs a self thrown exception?
  //  considorations: non custom exceptions do not log if a error occured.
  //  Expected errors should be handled with optional.
  //  logging where they occur is easier to determine the cause.

  public String string(String name) {
    Object value = get(name);

    if (value instanceof String string) {
      return string;
    } else {
      throw new RuntimeException("Failed to convert row value to string, name: " + name);
    }
  }

  // todo integer
  // todo long
  // todo float
  // todo double
  // todo uuid
  // todo boolean
  // todo bytearray
  // todo localdate
  // todo localdatetime
  // todo enum?
}
