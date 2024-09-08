------------
-- global --
------------
-- DROP TYPE IF EXISTS PERMISSION CASCADE;
-- CREATE TYPE PERMISSION AS ENUM ('OLIUMBI_ADMIN', 'JUBLAWOMA_ADMIN', 'UNCLET_ADMIN');
-- CREATE CAST (varchar AS PERMISSION) WITH INOUT AS IMPLICIT;

---------------
-- jublawoma --
---------------
DROP TYPE IF EXISTS JUBLAWOMA_DONATION_PRODUCT_UNIT CASCADE;
CREATE TYPE JUBLAWOMA_DONATION_PRODUCT_UNIT AS ENUM ('KILOGRAM', 'LITER', 'PIECE', 'TUBE', 'JAR', 'BOX', 'FRANCS');
CREATE CAST (varchar AS JUBLAWOMA_DONATION_PRODUCT_UNIT) WITH INOUT AS IMPLICIT;

------------
-- unclet --
------------
-- DROP TYPE IF EXISTS UNCLET_CONTACT_TYPE CASCADE;
-- CREATE TYPE UNCLET_CONTACT_TYPE AS ENUM ('PRIVATE', 'CATERING', 'GENERAL');
-- CREATE CAST (varchar AS UNCLET_CONTACT_TYPE) WITH INOUT AS IMPLICIT;

-- DROP TYPE IF EXISTS UNCLET_CONTACT_STATE CASCADE;
-- CREATE TYPE UNCLET_CONTACT_STATE AS ENUM ('UNREAD', 'ACKNOWLEDGED', 'DONE');
-- CREATE CAST (varchar AS UNCLET_CONTACT_STATE) WITH INOUT AS IMPLICIT;

------------
-- global --
------------
-- DROP TABLE IF EXISTS global_account CASCADE;
-- CREATE TABLE global_account
-- (
--     id        UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     firstname VARCHAR(32) NOT NULL,
--     lastname  VARCHAR(32) NOT NULL,
--     email     VARCHAR(64) NOT NULL UNIQUE,
--     password  VARCHAR(64) NOT NULL
-- );
--
-- DROP TABLE IF EXISTS global_account_session CASCADE;
-- CREATE TABLE global_account_session
-- (
--     id         UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     account_id UUID        NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
--     token      VARCHAR(32) NOT NULL UNIQUE,
--     expires    TIMESTAMP   NOT NULL
-- );
--
-- DROP TABLE IF EXISTS global_account_permission CASCADE;
-- CREATE TABLE global_account_permission
-- (
--     id         UUID       NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     account_id UUID       NOT NULL REFERENCES account ON UPDATE CASCADE ON DELETE CASCADE,
--     permission PERMISSION NOT NULL
-- );
--
-- DROP TABLE IF EXISTS global_image CASCADE;
-- CREATE TABLE global_image
-- (
--     id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()
-- );

---------------
-- jublawoma --
---------------
DROP TABLE IF EXISTS jublawoma_donation CASCADE;
CREATE TABLE jublawoma_donation
(
    id          UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    title       VARCHAR(256) NOT NULL,
    description TEXT         NOT NULL,
    contact     VARCHAR(256) NOT NULL,
    start       TIMESTAMP    NOT NULL,
    finish      TIMESTAMP    NOT NULL
);

DROP TABLE IF EXISTS jublawoma_donation_product CASCADE;
CREATE TABLE jublawoma_donation_product
(
    id          UUID                            NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    donation_id UUID                            NOT NULL REFERENCES jublawoma_donation,
    name        VARCHAR(128)                    NOT NULL,
    quantity    FLOAT                           NOT NULL,
    step        FLOAT                           NOT NULL,
    unit        JUBLAWOMA_DONATION_PRODUCT_UNIT NOT NULL,
    note        TEXT                            NULL
);

DROP TABLE IF EXISTS jublawoma_donation_product_donor CASCADE;
CREATE TABLE jublawoma_donation_product_donor
(
    id                  UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    donation_product_id UUID        NOT NULL REFERENCES jublawoma_donation_product,
    firstname           VARCHAR(32) NOT NULL,
    lastname            VARCHAR(32) NOT NULL,
    phone               VARCHAR(32) NOT NULL,
    quantity            FLOAT       NOT NULL,
    note                TEXT        NULL
);

-- DROP TABLE IF EXISTS jublawoma_contact CASCADE;
-- CREATE TABLE jublawoma_contact
-- (
--     id        UUID                    NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     firstname VARCHAR(32)             NOT NULL,
--     lastname  VARCHAR(32)             NOT NULL,
--     email     VARCHAR(64)             NOT NULL,
--     type      jublawoma_contact_type  NOT NULL,
--     message   TEXT                    NOT NULL,
--     state     jublawoma_contact_state NOT NULL
-- );
--
-- DROP TABLE IF EXISTS jublawoma_clothes CASCADE;
-- CREATE TABLE jublawoma_clothes
-- (
--     id          UUID                    NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     name        VARCHAR(32)             NOT NULL,
--     description VARCHAR(32)             NOT NULL,
--     email       VARCHAR(64)             NOT NULL,
--     type        jublawoma_contact_type  NOT NULL,
--     message     TEXT                    NOT NULL,
--     state       jublawoma_contact_state NOT NULL
-- );
--
-- DROP TABLE IF EXISTS jublawoma_clothes_size CASCADE;
-- CREATE TABLE jublawoma_clothes_size
-- (
--     id                   UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     jublawoma_clothes_id UUID        NOT NULL REFERENCES jublawoma_clothes ON UPDATE CASCADE ON DELETE CASCADE,
--     name                 VARCHAR(32) NOT NULL,
--     available            BOOLEAN     NOT NULL
-- );
--
-- DROP TABLE IF EXISTS jublawoma_clothes_images CASCADE;
-- CREATE TABLE jublawoma_clothes_images
-- (
--     id                     UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     jublawoma_clothes_id   UUID        NOT NULL REFERENCES jublawoma_clothes ON UPDATE CASCADE ON DELETE CASCADE,
--     image_id               UUID        NOT NULL REFERENCES image ON UPDATE CASCADE ON DELETE CASCADE,
--     jublawoma_clothes_size VARCHAR(32) NOT NULL
-- );
--
-- DROP TABLE IF EXISTS jublawoma_clothes_size_request CASCADE;
-- CREATE TABLE jublawoma_clothes_size_request
-- (
--     id                        UUID                                 NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     jublawoma_clothes_size_id UUID                                 NOT NULL REFERENCES jublawoma_clothes_size ON UPDATE CASCADE ON DELETE CASCADE,
--     firstname                 VARCHAR(32)                          NOT NULL,
--     lastname                  VARCHAR(32)                          NOT NULL,
--     email                     VARCHAR(64)                          NOT NULL,
--     phone                     VARCHAR(32)                          NOT NULL,
--     quantity                  INT                                  NOT NULL,
--     state                     jublawoma_clothes_size_request_state NOT NULL
-- );
--
-- ------------
-- -- unclet --
-- ------------
-- DROP TABLE IF EXISTS unclet_contact CASCADE;
-- CREATE TABLE unclet_contact
-- (
--     id        UUID                 NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     firstname VARCHAR(32)          NOT NULL,
--     lastname  VARCHAR(32)          NOT NULL,
--     email     VARCHAR(64)          NOT NULL,
--     phone     VARCHAR(32)          NOT NULL,
--     type      UNCLET_CONTACT_TYPE  NOT NULL,
--     message   TEXT                 NOT NULL,
--     state     UNCLET_CONTACT_STATE NOT NULL
-- );
--
-- DROP TABLE IF EXISTS unclet_review CASCADE;
-- CREATE TABLE unclet_review
-- (
--     id        UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     firstname VARCHAR(32) NOT NULL,
--     lastname  VARCHAR(32) NOT NULL,
--     email     VARCHAR(64) NOT NULL,
--     review    TEXT        NOT NULL
-- );
--
-- -- todo naming
-- DROP TABLE IF EXISTS unclet_story CASCADE;
-- CREATE TABLE unclet_story
-- (
--     id        UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
--     firstname VARCHAR(32) NOT NULL,
--     lastname  VARCHAR(32) NOT NULL,
--     email     VARCHAR(64) NOT NULL,
--     review    TEXT        NOT NULL
-- );
--
