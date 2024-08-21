TRUNCATE TABLE account CASCADE;
INSERT INTO account(account_id, firstname, lastname, email, password)
VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Alex', 'Yeet', 'email1', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
       ('aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'Bob', 'Burger', 'email2', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
       ('aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'Carlo', 'Pierotto', 'email3', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6');

TRUNCATE TABLE account_session CASCADE;
INSERT INTO account_session(account_session_id, account_id, token, expires)
VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token1', current_timestamp),
       ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token2', current_timestamp),
       ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token3', current_timestamp),
       ('aaaaaaa2-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token4', current_timestamp),
       ('aaaaaaa2-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token5', current_timestamp);

TRUNCATE TABLE account_permission CASCADE;
INSERT INTO account_permission(account_permission_id, account_id, permission)
VALUES ('aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'JUBLAWOMA_ADMIN'),
       ('aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'UNCLET_ADMIN'),
       ('aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'JUBLAWOMA_ADMIN'),
       ('aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'UNCLET_ADMIN');
