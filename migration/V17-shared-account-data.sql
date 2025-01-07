INSERT INTO shared_account(id, name, password)
VALUES (gen_random_uuid(), 'tümel', '$argon2id$v=19$m=16384,t=2,p=1$TdMXISgnID9PpEgrX4gG4g$oBGdVz9eQCmCqkdGR/4e0A3+IlATCuxHAOlzSkUYrto');

INSERT INTO shared_account_permission(id, account_id, permission)
VALUES (gen_random_uuid(), (SELECT id FROM shared_account WHERE name = 'oliumbi'), 'UNCLET_ADMIN'),
       (gen_random_uuid(), (SELECT id FROM shared_account WHERE name = 'tümel'), 'UNCLET_ADMIN');

