DROP TYPE IF EXISTS UNCLET_BOOKING_STATUS CASCADE;
CREATE TYPE UNCLET_BOOKING_STATUS AS ENUM ('OPEN', 'IN_PROGRESS', 'DONE', 'REJECTED');
CREATE CAST (varchar AS UNCLET_BOOKING_STATUS) WITH INOUT AS IMPLICIT;
