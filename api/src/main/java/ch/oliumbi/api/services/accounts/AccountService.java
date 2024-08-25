package ch.oliumbi.api.services.accounts;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import ch.oliumbi.api.models.Account;
import ch.oliumbi.api.models.AccountPermission;
import ch.oliumbi.api.models.AccountSession;
import java.util.Optional;

@Autoload
public class AccountService {

  private final Database database;

  public AccountService(Database database) {
    this.database = database;
  }

  public Optional<Account> loadByToken(String token) {

    Optional<Account> account = database.querySingle(Account.class, """
            SELECT  account.account_id,
                    account.firstname,
                    account.lastname,
                    account.email,
                    account.password
            FROM    account
            INNER JOIN account_session USING (account_id)
            WHERE   account_session.token = 'token1'
            AND     account_session.expires > current_timestamp
            LIMIT   1
            INTO    id,
                    firstname,
                    lastname,
                    email,
                    password
            """,
        Param.from("token", token));

    if (account.isEmpty()) {
      return Optional.empty();
    }

    database.query(AccountSession.class, """
            SELECT  account_session_id,
                    account_id,
                    token,
                    expires
            FROM    account_session
            WHERE   account_id = :id
            INTO    id,
                    accountId,
                    token,
                    expires
            """,
        account).ifPresent(accountSessions -> account.get().setSessions(accountSessions));

    database.query(AccountPermission.class, """
            SELECT  account_permission_id,
                    account_id,
                    permission
            FROM    account_session
            WHERE   account_id = :id
            INTO    id,
                    accountId,
                    permission
            """,
        account).ifPresent(accountPermissions -> account.get().setPermissions(accountPermissions));

    return account;
  }
}
