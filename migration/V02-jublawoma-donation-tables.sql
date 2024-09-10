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
