-----------
-- enums --
-----------
DROP TYPE IF EXISTS permission CASCADE;
CREATE TYPE permission AS ENUM ('OLIUMBI_ADMIN', 'JUBLAWOMA_ADMIN', 'UNCLET_ADMIN');
CREATE CAST (varchar AS permission) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS unclet_contact_type CASCADE;
CREATE TYPE unclet_contact_type AS ENUM ('PRIVATE', 'CATERING', 'GENERAL');
CREATE CAST (varchar AS unclet_contact_type) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS unclet_contact_state CASCADE;
CREATE TYPE unclet_contact_state AS ENUM ('UNREAD', 'ACKNOWLEDGED', 'DONE');
CREATE CAST (varchar AS unclet_contact_state) WITH INOUT AS IMPLICIT;

-------------
-- account --
-------------
DROP TABLE IF EXISTS account CASCADE;
CREATE TABLE account
(
    account_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname  VARCHAR(32) NOT NULL,
    lastname   VARCHAR(32) NOT NULL,
    email      VARCHAR(64) NOT NULL UNIQUE,
    password   VARCHAR(64) NOT NULL
);

DROP TABLE IF EXISTS account_session CASCADE;
CREATE TABLE account_session
(
    account_session_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id         UUID        NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
    token              VARCHAR(32) NOT NULL UNIQUE,
    expires            TIMESTAMP   NOT NULL
);

DROP TABLE IF EXISTS account_permission CASCADE;
CREATE TABLE account_permission
(
    account_permission_id UUID       NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id            UUID       NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
    permission            permission NOT NULL
);

DROP TABLE IF EXISTS image CASCADE;
CREATE TABLE image
(
    image_id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()
);

DROP TABLE IF EXISTS jublawoma_contact CASCADE;
CREATE TABLE jublawoma_contact
(
    unclet_contact_id UUID                    NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname         VARCHAR(32)             NOT NULL,
    lastname          VARCHAR(32)             NOT NULL,
    email             VARCHAR(64)             NOT NULL,
    type              jublawoma_contact_type  NOT NULL,
    message           TEXT                    NOT NULL,
    state             jublawoma_contact_state NOT NULL
);

DROP TABLE IF EXISTS jublawoma_clothes CASCADE;
CREATE TABLE jublawoma_clothes
(
    jublawoma_clothes_id UUID                    NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name                 VARCHAR(32)             NOT NULL,
    description          VARCHAR(32)             NOT NULL,
    email                VARCHAR(64)             NOT NULL,
    type                 jublawoma_contact_type  NOT NULL,
    message              TEXT                    NOT NULL,
    state                jublawoma_contact_state NOT NULL
);

DROP TABLE IF EXISTS jublawoma_clothes_size CASCADE;
CREATE TABLE jublawoma_clothes_size
(
    jublawoma_clothes_size_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    jublawoma_clothes_id      UUID        NOT NULL REFERENCES jublawoma_clothes ON UPDATE CASCADE ON DELETE CASCADE,
    name                      VARCHAR(32) NOT NULL,
    available                 BOOLEAN     NOT NULL
);

DROP TABLE IF EXISTS jublawoma_clothes_images CASCADE;
CREATE TABLE jublawoma_clothes_images
(
    jublawoma_clothes_images_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    jublawoma_clothes_id        UUID        NOT NULL REFERENCES jublawoma_clothes ON UPDATE CASCADE ON DELETE CASCADE,
    image_id                    UUID        NOT NULL REFERENCES image ON UPDATE CASCADE ON DELETE CASCADE,
    jublawoma_clothes_size      VARCHAR(32) NOT NULL
);

DROP TABLE IF EXISTS jublawoma_clothes_size_request CASCADE;
CREATE TABLE jublawoma_clothes_size_request
(
    jublawoma_clothes_size_request_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    jublawoma_clothes_size_id         UUID        NOT NULL REFERENCES jublawoma_clothes_size ON UPDATE CASCADE ON DELETE CASCADE,
    firstname                         VARCHAR(32) NOT NULL,
    lastname                          VARCHAR(32) NOT NULL,
    email                             VARCHAR(64) NOT NULL,
    phone                             VARCHAR(32) NOT NULL,
    quantity                          INT         NOT NULL,
    state             jublawoma_clothes_size_request_state NOT NULL
);

DROP TABLE IF EXISTS unclet_contact CASCADE;
CREATE TABLE unclet_contact
(
    unclet_contact_id UUID                 NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname         VARCHAR(32)          NOT NULL,
    lastname          VARCHAR(32)          NOT NULL,
    email             VARCHAR(64)          NOT NULL,
    phone             VARCHAR(32)          NOT NULL,
    type              unclet_contact_type  NOT NULL,
    message           TEXT                 NOT NULL,
    state             unclet_contact_state NOT NULL
);

DROP TABLE IF EXISTS unclet_review CASCADE;
CREATE TABLE unclet_review
(
    unclet_review_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname        VARCHAR(32) NOT NULL,
    lastname         VARCHAR(32) NOT NULL,
    email            VARCHAR(64) NOT NULL,
    review           TEXT        NOT NULL
);

-- todo naming
DROP TABLE IF EXISTS unclet_story CASCADE;
CREATE TABLE unclet_story
(
    unclet_story_id UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname       VARCHAR(32) NOT NULL,
    lastname        VARCHAR(32) NOT NULL,
    email           VARCHAR(64) NOT NULL,
    review          TEXT        NOT NULL
);
