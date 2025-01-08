package ch.oliumbi.api.shared.communication;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.confguration.Configuration;
import ch.oliumbi.api.enums.server.Environment;
import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import java.util.Properties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Autoload
public class CommunicationEmail {

  private static final Logger LOGGER = LoggerFactory.getLogger(CommunicationEmail.class);

  private final Configuration configuration;

  public CommunicationEmail(Configuration configuration) {
    this.configuration = configuration;
  }

  public boolean send(Communication communication) {
    String host = configuration.string("email.host");
    String port = configuration.string("email.port");
    String username = configuration.string("email.username");
    String password = configuration.string("email.password");
    String recipient = communication.getRecipient();

    Properties properties = new Properties();
    properties.put("mail.smtp.auth", "true");
    properties.put("mail.smtp.starttls.enable", "true");
    properties.put("mail.smtp.host", host);
    properties.put("mail.smtp.port", port);

    try {
      Session session = Session.getInstance(properties, new Authenticator() {
        @Override
        protected PasswordAuthentication getPasswordAuthentication() {
          return new PasswordAuthentication(username, password);
        }
      });

      if (configuration.environment() == Environment.DEVELOPMENT) {
        recipient = username;
      }

      Message message = new MimeMessage(session);
      message.setFrom(new InternetAddress(username));
      message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
      message.setSubject(communication.getTitle());
      message.setText(communication.getBody());

      Transport.send(message);
    } catch (Exception e) {
      LOGGER.error("Failed to send email.", e);
      return false;
    }

    return true;
  }
}
