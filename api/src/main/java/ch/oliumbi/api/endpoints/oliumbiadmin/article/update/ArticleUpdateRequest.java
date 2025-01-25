package ch.oliumbi.api.endpoints.oliumbiadmin.article.update;

import ch.oliumbi.api.server.Validatable;
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
public class ArticleUpdateRequest implements Validatable {
  private UUID imageId;
  private String title;
  private String description;
  private String author;
  private LocalDateTime published;
  private String markdown;
  private Boolean visible;

  @Override
  public boolean valid() {
    if (title == null) {
      return false;
    }

    if (description == null) {
      return false;
    }

    if (author == null) {
      return false;
    }

    if (published == null) {
      return false;
    }

    if (markdown == null) {
      return false;
    }

    if (visible == null) {
      return false;
    }

    return true;
  }
}
