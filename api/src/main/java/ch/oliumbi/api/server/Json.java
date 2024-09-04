package ch.oliumbi.api.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.lang.reflect.Type;
import java.text.DateFormat;

// todo move
public class Json {

  private static final ObjectMapper objectMapper;
  private static final TypeFactory typeFactory;

  static {
    objectMapper = new ObjectMapper();
    objectMapper.registerModule(new JavaTimeModule());

    // todo date and strings serialization

    typeFactory = objectMapper.getTypeFactory();
  }

  private Json() {}

  public static <T> T read(String json, Type type) throws Exception {
    return objectMapper.readValue(json, typeFactory.constructType(type));
  }

  public static String write(Object value) throws Exception {
    return objectMapper.writeValueAsString(value);
  }
}
