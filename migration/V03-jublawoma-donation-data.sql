TRUNCATE TABLE jublawoma_donation CASCADE;
INSERT INTO jublawoma_donation(id, title, description, contact, start, finish)
VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Hela 2024', 'Wir sind auf Ihre Unterstützung angewiesen, damit wir im Lager leckeres und gesundes Essen zu servieren können. Jede Spende hilft uns, einen vielfältigeren Menuplan zu erstellen. Die Spenden sammeln wir bei der Gepäckabgabe. ', 'Bei Fragen oder Problemen können Sie Oliver Umbricht auf Whatsapp [078 850 04 73] erreichen.', '2024-09-08', '2024-09-22');

TRUNCATE TABLE jublawoma_donation_product CASCADE;
INSERT INTO jublawoma_donation_product(id, donation_id, name, quantity, step, unit, note)
VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Äpfel', 240, 1, 'PIECE', NULL),
       ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Bananen', 120, 1, 'PIECE', NULL),
       ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Blévita', 40, 1, 'PIECE', NULL),
       ('aaaaaaa2-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Butter', 23, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Cornflakes', 18, 1, 'BOX', NULL),
       ('aaaaaaa2-bbb6-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Farmerriegel', 20, 1, 'PIECE', NULL),
       ('aaaaaaa2-bbb7-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Hörnli Teigwaren', 15, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bbb8-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Ketchup', 12, 1, 'TUBE', NULL),
       ('aaaaaaa2-bbb9-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Konfitüre', 11, 1, 'JAR', NULL),
       ('aaaaaaa2-bb10-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Kuchen', 12, 1, 'PIECE', NULL),
       ('aaaaaaa2-bb11-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Lasagnenblätter', 8, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb12-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Makkaroni Teigwaren', 8, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb13-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Mayonaise', 12, 1, 'TUBE', NULL),
       ('aaaaaaa2-bb14-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Mehl', 3, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb15-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Mohrenköpfe Dubler', 150, 10, 'PIECE', NULL),
       ('aaaaaaa2-bb16-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Müesli', 15, 1, 'BOX', NULL),
       ('aaaaaaa2-bb17-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Multivitaminsaft', 50, 1, 'LITER', NULL),
       ('aaaaaaa2-bb18-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Nutella', 10, 1, 'PIECE', 'Grosse Gläser'),
       ('aaaaaaa2-bb19-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Orangensaft', 55, 1, 'LITER', NULL),
       ('aaaaaaa2-bb20-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Rapsöl', 15, 1, 'LITER', NULL),
       ('aaaaaaa2-bb21-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Salz', 5, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb22-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Schokotafeln', 50, 1, 'PIECE', NULL),
       ('aaaaaaa2-bb23-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Senf', 6, 1, 'TUBE', NULL),
       ('aaaaaaa2-bb24-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Sirup Himbeer', 8, 0.5, 'LITER', NULL),
       ('aaaaaaa2-bb25-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Sugus', 12, 1, 'BOX', NULL),
       ('aaaaaaa2-bb26-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Tomatenpelatti', 8, 0.5, 'KILOGRAM', 'Gewürfelt'),
       ('aaaaaaa2-bb27-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Tomatenpüree', 14, 1, 'TUBE', NULL),
       ('aaaaaaa2-bb28-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Trockenreis', 10, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb29-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Zucker', 3, 0.5, 'KILOGRAM', NULL),
       ('aaaaaaa2-bb30-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Gemüseeinkauf', 400, 20, 'FRANCS', 'Per Twint an 079 487 81 16')
