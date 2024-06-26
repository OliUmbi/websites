-----------
-- enums --
-----------
DROP TYPE IF EXISTS permission CASCADE;
CREATE TYPE permission AS ENUM ('OLIUMBI_ADMIN', 'JUBLAWOMA_ADMIN', 'UNCLET_ADMIN');
CREATE CAST (varchar AS permission) WITH INOUT AS IMPLICIT;

------------
-- account --
------------
DROP TABLE IF EXISTS account CASCADE;
CREATE TABLE account
(
    account_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name       VARCHAR(32) NOT NULL UNIQUE,
    password   VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS account_session CASCADE;
CREATE TABLE account_session
(
    account_session_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID        NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
    token              VARCHAR(32) NOT NULL,
    expires            TIMESTAMP   NOT NULL
);

DROP TABLE IF EXISTS account_permission CASCADE;
CREATE TABLE account_permission
(
    account_permission_id UUID       NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id            UUID       NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
    permission            permission NOT NULL
);
