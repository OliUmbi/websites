DROP TABLE IF EXISTS jublawoma_article CASCADE;
CREATE TABLE jublawoma_article
(
    id          UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    image_id    UUID         NULL REFERENCES shared_image ON UPDATE CASCADE ON DELETE SET NULL,
    title       VARCHAR(32)  NOT NULL,
    description VARCHAR(128) NOT NULL,
    author      VARCHAR(32)  NOT NULL,
    published   TIMESTAMP    NOT NULL,
    markdown    TEXT         NOT NULL,
    visible     BOOLEAN      NOT NULL
);
