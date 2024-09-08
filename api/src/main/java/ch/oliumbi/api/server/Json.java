package ch.oliumbi.api.server;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.cfg.DatatypeFeature;
import com.fasterxml.jackson.databind.cfg.DatatypeFeatures;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// todo move
public class Json {

  private static final ObjectMapper objectMapper;
  private static final TypeFactory typeFactory;

  static {
    objectMapper = new ObjectMapper();
    JavaTimeModule javaTimeModule = new JavaTimeModule();

    objectMapper.registerModule(javaTimeModule);
    javaTimeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ISO_DATE_TIME));
    javaTimeModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ISO_DATE_TIME));
    objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

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
