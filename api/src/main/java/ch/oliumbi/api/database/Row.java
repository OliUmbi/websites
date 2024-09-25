package ch.oliumbi.api.database;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.OffsetTime;
import java.util.HashMap;
import java.util.UUID;

public class Row extends HashMap<String, Object> {

  public Row(ResultSet resultSet) throws Exception {
    super(resultSet.getMetaData().getColumnCount(), 1);

    for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
      put(resultSet.getMetaData().getColumnName(i), resultSet.getObject(i));
    }
  }

  public String getString(String name) {
    if (get(name) instanceof String getString) {
      return getString;
    } else {
      throw new RuntimeException("Failed to convert row value to string, name: " + name);
    }
  }

  public Boolean getBoolean(String name) {
    if (get(name) instanceof Boolean getBoolean) {
      return getBoolean;
    } else {
      throw new RuntimeException("Failed to convert row value to boolean, name: " + name);
    }
  }

  public Short getShort(String name) {
    if (get(name) instanceof Short getShort) {
      return getShort;
    } else {
      throw new RuntimeException("Failed to convert row value to short, name: " + name);
    }
  }

  public Integer getInteger(String name) {
    if (get(name) instanceof Integer getInt) {
      return getInt;
    } else {
      throw new RuntimeException("Failed to convert row value to int, name: " + name);
    }
  }

  public Long getLong(String name) {
    if (get(name) instanceof Long getLong) {
      return getLong;
    } else {
      throw new RuntimeException("Failed to convert row value to long, name: " + name);
    }
  }

  public BigDecimal getBigDecimal(String name) {
    if (get(name) instanceof BigDecimal getBigDecimal) {
      return getBigDecimal;
    } else {
      throw new RuntimeException("Failed to convert row value to big decimal, name: " + name);
    }
  }

  public Float getFloat(String name) {
    if (get(name) instanceof Float getFloat) {
      return getFloat;
    } else {
      throw new RuntimeException("Failed to convert row value to float, name: " + name);
    }
  }

  public Double getDouble(String name) {
    if (get(name) instanceof Double getDouble) {
      return getDouble;
    } else {
      throw new RuntimeException("Failed to convert row value to double, name: " + name);
    }
  }

  public LocalDate getLocalDate(String name) {
    if (get(name) instanceof LocalDate getLocalDate) {
      return getLocalDate;
    } else {
      throw new RuntimeException("Failed to convert row value to local date, name: " + name);
    }
  }

  public LocalTime getLocalTime(String name) {
    if (get(name) instanceof LocalTime getLocalTime) {
      return getLocalTime;
    } else {
      throw new RuntimeException("Failed to convert row value to local time, name: " + name);
    }
  }

  public OffsetTime getOffsetTime(String name) {
    if (get(name) instanceof OffsetTime getOffsetTime) {
      return getOffsetTime;
    } else {
      throw new RuntimeException("Failed to convert row value to offset time, name: " + name);
    }
  }

  public LocalDateTime getLocalDateTime(String name) {
    if (get(name) instanceof LocalDateTime getLocalDateTime) {
      return getLocalDateTime;
    } else {
      throw new RuntimeException("Failed to convert row value to local date time, name: " + name);
    }
  }

  public OffsetDateTime getOffsetDateTime(String name) {
    if (get(name) instanceof OffsetDateTime getOffsetDateTime) {
      return getOffsetDateTime;
    } else {
      throw new RuntimeException("Failed to convert row value to offset date time, name: " + name);
    }
  }

  public UUID getUUID(String name) {
    if (get(name) instanceof UUID getUUID) {
      return getUUID;
    } else {
      throw new RuntimeException("Failed to convert row value to uuid, name: " + name);
    }
  }

  public byte[] getByteArray(String name) {
    if (get(name) instanceof byte[] byteArray) {
      return byteArray;
    } else {
      throw new RuntimeException("Failed to convert row value to byte array, name: " + name);
    }
  }

  public <E extends Enum<E>> E getEnum(String name, Class<E> clazz) {
    Object value = get(name);
    if (value instanceof String string) {
      return Enum.valueOf(clazz, string);
    } else {
      throw new RuntimeException("Failed to convert row value to enum, name: " + name);
    }
  }
}
