INSERT INTO shared_account_permission(id, account_id, permission)
VALUES (gen_random_uuid(), (SELECT id FROM shared_account WHERE name = 'oliumbi'), 'OLIUMBI_ADMIN');

