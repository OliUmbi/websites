DROP TABLE IF EXISTS shared_account CASCADE;
CREATE TABLE shared_account
(
    id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()
);
