DROP TABLE IF EXISTS unclet_review CASCADE;
CREATE TABLE unclet_review
(
    id          UUID                 NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    status      UNCLET_REVIEW_STATUS NOT NULL,
    stars       INTEGER              NOT NULL,
    name        VARCHAR(32)          NOT NULL,
    description VARCHAR(256)         NOT NULL,
    date        TIMESTAMP            NOT NULL
);
