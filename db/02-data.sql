-- TRUNCATE TABLE account CASCADE;
-- INSERT INTO account(account_id, firstname, lastname, email, password)
-- VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Alex', 'Yeet', 'email1', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
--        ('aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'Bob', 'Burger', 'email2', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6'),
--        ('aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'Carlo', 'Pierotto', 'email3', '$2a$10$N75JmlVwH3214SKi/ipxIOvHKCG.WW0uTCVJlbDImlqqk/7VQlua6');
--
-- TRUNCATE TABLE account_session CASCADE;
-- INSERT INTO account_session(account_session_id, account_id, token, expires)
-- VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token1', current_timestamp),
--        ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token2', current_timestamp),
--        ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token3', current_timestamp),
--        ('aaaaaaa2-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token4', current_timestamp),
--        ('aaaaaaa2-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token5', current_timestamp);
--
-- TRUNCATE TABLE account_permission CASCADE;
-- INSERT INTO account_permission(account_permission_id, account_id, permission)
-- VALUES ('aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'JUBLAWOMA_ADMIN'),
--        ('aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'UNCLET_ADMIN'),
--        ('aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'JUBLAWOMA_ADMIN'),
--        ('aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'UNCLET_ADMIN');



TRUNCATE TABLE jublawoma_donation CASCADE;
INSERT INTO jublawoma_donation(id, title, description, contact, start, finish)
VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Hela 2024', 'Damit wir ein gesundes und leckeres Essen im Lager ermöglichen können, sind wir auf euch angewiesen. Die Spenden werden bei der Gepäckabgabe am Freitag gesammelt. ', 'Bei Problemen oder Fragen können Sie Oliver Umbricht auf Whatsapp (078 850 04 73) erreichen.', current_timestamp, current_timestamp + '7 days')

TRUNCATE TABLE jublawoma_donation_product CASCADE;
INSERT INTO jublawoma_donation_product(id, donation_id, name, quantity, unit)
VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Milk', 10, 'LITER'),
       ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Butter', 1, 'KILOGRAM'),
       ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Bread', 10, 'LITER'),
       ('aaaaaaa2-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Toast', 10, 'LITER'),
       ('aaaaaaa2-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Egg', 10, 'LITER'),
       ('aaaaaaa2-bbb6-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Oil', 10, 'LITER'),
       ('aaaaaaa2-bbb7-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Non-vegan diary products', 10, 'LITER'),
       ('aaaaaaa2-bbb8-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Yeeeeeet', 10, 'LITER')
