DROP TABLE IF EXISTS shared_communication CASCADE;
CREATE TABLE shared_communication
(
    id        UUID                        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    type      SHARED_COMMUNICATION_TYPE   NOT NULL,
    status    SHARED_COMMUNICATION_STATUS NOT NULL,
    attempts  INTEGER                     NOT NULL,
    recipient VARCHAR(256)                NOT NULL,
    title     TEXT                        NOT NULL,
    body      TEXT                        NOT NULL
);
