DROP TABLE IF EXISTS jublawoma_point CASCADE;
CREATE TABLE jublawoma_point
(
    id    UUID         NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name  VARCHAR(256) NOT NULL,
    code  VARCHAR(256) NOT NULL,
    space VARCHAR(256) NOT NULL
);

DROP TABLE IF EXISTS jublawoma_point_change CASCADE;
CREATE TABLE jublawoma_point_change
(
    id       UUID      NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    point_id UUID      NOT NULL REFERENCES jublawoma_point ON UPDATE CASCADE ON DELETE CASCADE,
    change   INTEGER   NOT NULL,
    created  TIMESTAMP NOT NULL
);
