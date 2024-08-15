package ch.oliumbi.api.server;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.eclipse.jetty.server.ConnectionMetaData;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Meta {
  private String ip;

  public Meta(ConnectionMetaData metaData) {
    this.ip = metaData.getRemoteSocketAddress().toString();
  }
}
