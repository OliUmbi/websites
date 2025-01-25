package ch.oliumbi.api.endpoints.oliumbiadmin.article.byid;

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
public class ArticleByIdResponse {

  private UUID id;
  private UUID imageId;
  private String title;
  private String description;
  private String author;
  private LocalDateTime published;
  private String markdown;
  private Boolean visible;
}
