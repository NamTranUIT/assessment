CREATE SCHEMA assessment;
USE assessment;

CREATE TABLE user_table (
id INT NOT NULL,
email VARCHAR(100) NOT NULL,
name VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE likes_table (
tree_id INT NOT NULL,
user_id INT NOT NULL
);

CREATE TABLE tree_table (
id INT NOT NULL,
friendly_name VARCHAR(100) NOT NULL,
scientific_name VARCHAR(100) NOT NULL,
owner_id INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO user_table (id, email, name) VALUES (1, "adam@versett.com", "Adam");
INSERT INTO user_table (id, email, name) VALUES (2, "jackey@versett.com", "Jackey");
INSERT INTO user_table (id, email, name) VALUES (3, "jane@versett.com", "Jane");
INSERT INTO user_table (id, email, name) VALUES (4, "mike@versett.com", "Mike");

INSERT INTO likes_table (tree_id, user_id) VALUES (1, 2);
INSERT INTO likes_table (tree_id, user_id) VALUES (2, 2);
INSERT INTO likes_table (tree_id, user_id) VALUES (1, 3);
INSERT INTO likes_table (tree_id, user_id) VALUES (3, 3);
INSERT INTO likes_table (tree_id, user_id) VALUES (1, 4);

INSERT INTO tree_table (id, friendly_name, scientific_name, owner_id) VALUE (1, "Oak", "Quercus", 1);
INSERT INTO tree_table (id, friendly_name, scientific_name, owner_id) VALUE (2, "English Yew", "Taxus baccata", 1);
INSERT INTO tree_table (id, friendly_name, scientific_name, owner_id) VALUE (3, "Giant Redwood", "Sequoiadendron giganteum", 2);
