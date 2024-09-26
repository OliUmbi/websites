TRUNCATE TABLE shared_account CASCADE;
INSERT INTO shared_account(id, name, password)
VALUES (gen_random_uuid(), 'oliumbi', '123');

TRUNCATE TABLE shared_account_permission CASCADE;
INSERT INTO shared_account_permission(id, account_id, permission)
VALUES (gen_random_uuid(), (SELECT id from shared_account LIMIT 1), 'JUBLAWOMA_ADMIN');

