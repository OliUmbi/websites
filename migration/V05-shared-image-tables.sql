DROP TABLE IF EXISTS shared_image CASCADE;
CREATE TABLE shared_image
(
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()
);
