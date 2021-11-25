/*
A. Based on the following database tables, please implement a database query that satisfies the following:
a.The query should return all trees that belong to the user with the email address “adam@versett.com”
b.The query returns the following information for each tree: the ID, friendly name, scientific name, the owner’s name.
c.The query also returns the total number of “likes” for each tree
*/
-- a
SELECT tree_table.* FROM tree_table INNER JOIN user_table ON user_table.id = tree_table.owner_id WHERE user_table.email = "adam@versett.com";
-- b
SELECT a.id as "ID", a.friendly_name as "Friendly Name", a.scientific_name as "Scientific Name", b.name as "Owner's Name" FROM tree_table as a INNER JOIN user_table as b ON b.id = a.owner_id;
-- c
SELECT a.*, count(b.tree_id) as "likes" FROM tree_table as a INNER JOIN likes_table as b ON a.id = b.tree_id GROUP BY b.tree_id;
/*
B.Same as A, but instead of condition a, return only trees that do not belong to the user with the email address “adam@versett.com”.
*/
SELECT tree_table.* FROM tree_table INNER JOIN user_table ON user_table.id = tree_table.owner_id WHERE user_table.email != "adam@versett.com";
/*
C.Same as A and B, but instead of condition a, return only trees with 3 or more likes.
*/
SELECT a.*, count(b.tree_id) as "likes" FROM tree_table as a INNER JOIN likes_table as b ON a.id = b.tree_id GROUP BY b.tree_id HAVING count(b.tree_id) >= 3;