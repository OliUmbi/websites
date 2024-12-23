DROP TABLE IF EXISTS unclet_booking CASCADE;
CREATE TABLE unclet_booking
(
    id       UUID                  NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    status   UNCLET_BOOKING_STATUS NOT NULL,
    name     VARCHAR(256)          NOT NULL,
    email    VARCHAR(256)          NOT NULL,
    date     DATE                  NOT NULL,
    location VARCHAR(256)          NOT NULL,
    people   INTEGER               NOT NULL,
    note     VARCHAR(1024)         NULL
);
