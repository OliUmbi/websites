TRUNCATE TABLE account CASCADE;
INSERT INTO account(account_id, name, password)
VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Alex', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
       ('aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'Bob', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
       ('aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'Carlo', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6');

TRUNCATE TABLE account_session CASCADE;
INSERT INTO account_session(account_session_id, account_id, token, expires)
VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp);

TRUNCATE TABLE account_permission CASCADE;
INSERT INTO account_permission(account_permission_id, account_id, website, role)
VALUES ('aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'JUBLA_WOMA', 'ADMINISTRATOR'),
       ('aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'UNCLE_T', 'ADMINISTRATOR'),
       ('aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'JUBLA_WOMA', 'USER'),
       ('aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'UNCLE_T', 'USER');
