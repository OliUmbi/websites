-----------
-- enums --
-----------
DROP TYPE IF EXISTS website CASCADE;
CREATE TYPE website AS ENUM ('JUBLA_WOMA', 'UNCLE_T');
CREATE CAST (varchar AS website) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS role CASCADE;
CREATE TYPE role AS ENUM ('USER', 'ADMINISTRATOR');
CREATE CAST (varchar AS role) WITH INOUT AS IMPLICIT;

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
    account_permission_id UUID    NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id            UUID    NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
    website               website NOT NULL,
    role                  role    NOT NULL
);
