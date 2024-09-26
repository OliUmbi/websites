DROP TABLE IF EXISTS shared_account CASCADE;
CREATE TABLE shared_account
(
    id       UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name     VARCHAR(32) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS shared_account_session CASCADE;
CREATE TABLE shared_account_session
(
    id         UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID        NOT NULL REFERENCES shared_account ON UPDATE CASCADE ON DELETE CASCADE,
    token      VARCHAR(32) NOT NULL UNIQUE,
    expires    TIMESTAMP   NOT NULL
);

DROP TABLE IF EXISTS shared_account_permission CASCADE;
CREATE TABLE shared_account_permission
(
    id         UUID                      NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID                      NOT NULL REFERENCES shared_account ON UPDATE CASCADE ON DELETE CASCADE,
    permission SHARED_ACCOUNT_PERMISSION_PERMISSION NOT NULL
);
