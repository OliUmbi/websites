package ch.oliumbi.api.shared.communication;

import ch.oliumbi.api.enums.shared.SharedCommunicationStatus;
import ch.oliumbi.api.enums.shared.SharedCommunicationType;
import ch.oliumbi.api.shared.account.AccountPermission;
import ch.oliumbi.api.shared.account.AccountSession;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Communication {

  private UUID id;
  private SharedCommunicationType type;
  private SharedCommunicationStatus status;
  private Integer attempts;
  private String recipient;
  private String title;
  private String body;
}
