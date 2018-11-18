------------ A ------------ 


CREATE TABLE stock (
id SERIAL primary key,
quantity INTEGER,
price DECIMAL,
citrus_id INTEGER
);

INSERT INTO stock (quantity,price,citrus_id) VALUES (33,25,1);
INSERT INTO stock (quantity,price,citrus_id) VALUES (50,15,2);
INSERT INTO stock (quantity,price,citrus_id) VALUES (10,35,3);
INSERT INTO stock (quantity,price,citrus_id) VALUES (0,20,4);

--  id | quantity | price | citrus_id 
-- ----+----------+-------+-----------
--   1 |       33 |    25 |         1
--   2 |       50 |    15 |         2
--   3 |       10 |    35 |         3
--   4 |        0 |    20 |         4

-- this will not return the names
-- SELECT * FROM stock WHERE citrus_id = 2 OR citrus_id = 3; 

SELECT quantity, name 
FROM citrus 
FULL OUTER JOIN stock 
ON citrus.id = stock.citrus_id
WHERE color = 'orange';

--  quantity |    name    
-- ----------+------------
--        50 | orange
--        10 | grapefruit


------------ B ------------ 
-- Join both citrus and stock table together to form a single resultset.


SELECT citrus.name AS citrus_name, stock.price AS stock_price
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id;

--  citrus_name | stock_price 
-- -------------+-------------
--  lemon       |          25
--  orange      |          15
--  grapefruit  |          35
--  lime        |          20

-- Join both citrus and stock table together to form a single resultset.

SELECT * FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id; 

--  id |    name    | color  | taste  | id | quantity | price | citrus_id 
-- ----+------------+--------+--------+----+----------+-------+-----------
--   2 | orange     | orange | juicy  |  2 |       50 |    15 |         2
--   3 | grapefruit | orange | bitter |  3 |       10 |    35 |         3
--   4 | lime       | green  | sour   |  4 |        0 |    20 |         4
--   1 | lemon      | yellow | sour   |  1 |       53 |    25 |         1


------------ C ------------ 
-- First check output of the current stock level of citrus fruits


SELECT citrus.name AS citrus_name, stock.quantity AS stock_quantity
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id;

--  citrus_name | stock_quantity 
-- -------------+----------------
--  lemon       |             33
--  orange      |             50
--  grapefruit  |             10
--  lime        |              0

-- add 20 lemons
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'lemon';
-- this would presume we know that this refers to lemon - whereas we want to join the tables first - so we can see the names of the fruits
-- WHERE citrus_id = 1;
COMMIT;

-- add 40 oranges
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'orange';
COMMIT;

-- buy 40 limes
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus.id and name = 'lime';
COMMIT;

-- buy 40 grapefruits
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus.id and name = 'grapefruit';
COMMIT;

-- When you are performing the SELL Action , please check in advance if there is enough quantity in your stock. It involves running one extra SELECT sql. You have to enclose both the stock-checking SQL and the stock-updating SQL in the same transaction to avoid double-selling

-- sell 20 oranges
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
-- check sql
SELECT quantity
FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id 
WHERE name = 'orange';
-- sell sql
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'orange';
COMMIT;

-- sell 30 lemons
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;

SELECT quantity
FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id
WHERE name = 'lemon';

UPDATE stock
SET quantity = quantity - 30
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'lemon';
COMMIT;

-- sell 20 limes
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;

SELECT quantity
FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id
WHERE name = 'lime';

UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'lime';
COMMIT;

-- sell 20 grapefruit
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;

SELECT quantity
FROM stock INNER JOIN citrus ON stock.citrus_id = citrus.id
WHERE name = 'grapefruit';

UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'grapefruit';
COMMIT;