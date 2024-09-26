package ch.oliumbi.api.shared.account;

import ch.oliumbi.api.autoload.Autoload;
import ch.oliumbi.api.database.Database;
import ch.oliumbi.api.database.Param;
import java.util.List;
import java.util.Optional;

@Autoload
public class AccountService {

  private final Database database;

  public AccountService(Database database) {
    this.database = database;
  }

  public Optional<Account> loadByToken(String token) {

    Optional<Account> account = database.querySingle(Account.class, """
            SELECT  sa.id,
                    sa.name,
                    sa.password
            FROM    shared_account sa
            INNER JOIN shared_account_session sas ON sa.id = sas.account_id
            WHERE   sas.token = :token
            AND     sas.expires > current_timestamp
            LIMIT   1
            INTO    id,
                    name,
                    password
            """,
        Param.of("token", token));

    if (account.isEmpty()) {
      return Optional.empty();
    }

    Optional<List<AccountSession>> accountSessions = database.query(AccountSession.class, """
            SELECT  id,
                    account_id,
                    token,
                    expires
            FROM    shared_account_session
            WHERE   account_id = :id
            INTO    id,
                    accountId,
                    token,
                    expires
            """,
        account.get());

    if (accountSessions.isEmpty()) {
      return Optional.empty();
    }

    account.get().setSessions(accountSessions.get());

    Optional<List<AccountPermission>> accountPermissions = database.query(AccountPermission.class, """
            SELECT  id,
                    account_id,
                    permission
            FROM    shared_account_permission
            WHERE   account_id = :id
            INTO    id,
                    accountId,
                    permission
            """,
        account.get());

    if (accountPermissions.isEmpty()) {
      return Optional.empty();
    }

    account.get().setPermissions(accountPermissions.get());

    return account;
  }
}
