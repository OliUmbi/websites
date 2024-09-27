TRUNCATE TABLE shared_account CASCADE;
INSERT INTO shared_account(id, name, password)
VALUES (gen_random_uuid(), 'oliumbi', '$argon2id$v=19$m=16384,t=2,p=1$i6r+YDmIzMnxGUXbnnxUaw$krBj/9QV/VUBaMAlvk3IwpTOTitwcfP5hkr4NviY8pE'),
       (gen_random_uuid(), 'leiter', '$argon2id$v=19$m=16384,t=2,p=1$satMU9UQzwMNtVcKJmUZXA$lKtKh8vhArtLkhy0BwKXtbhCcmQdK+FJLe7dQYOkQ/g');

TRUNCATE TABLE shared_account_permission CASCADE;
INSERT INTO shared_account_permission(id, account_id, permission)
VALUES (gen_random_uuid(), (SELECT id FROM shared_account WHERE name = 'oliumbi'), 'JUBLAWOMA_ADMIN'),
       (gen_random_uuid(), (SELECT id FROM shared_account WHERE name = 'leiter'), 'JUBLAWOMA_ADMIN');

