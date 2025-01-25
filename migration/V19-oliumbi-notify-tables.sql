DROP TABLE IF EXISTS oliumbi_notify CASCADE;
CREATE TABLE oliumbi_notify
(
    id    UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(64) NOT NULL
);
