package ch.oliumbi.api.endpoints.jublawomaadmin.article.update;

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
public class ArticleUpdateRequest {
  private UUID imageId;
  private String title;
  private String description;
  private String author;
  private LocalDateTime published;
  private String markdown;
}
