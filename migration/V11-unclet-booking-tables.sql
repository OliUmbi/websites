DROP TABLE IF EXISTS unclet_booking CASCADE;
CREATE TABLE unclet_booking
(
    id       UUID                  NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    status   UNCLET_BOOKING_STATUS NOT NULL,
    name     VARCHAR(32)          NOT NULL,
    email    VARCHAR(64)          NOT NULL,
    date     TIMESTAMP                  NOT NULL,
    location VARCHAR(64)          NOT NULL,
    people   INTEGER               NOT NULL,
    note     VARCHAR(1024)         NULL
);
