-- A

CREATE TABLE stock (
id SERIAL primary key,
name VARCHAR(255) not null,
description VARCHAR(255),
quantity INTEGER,
price DECIMAL
);

-- B

DROP TABLE stock;

-- C

CREATE TABLE employee (
employee_id SERIAL primary key,
first_name VARCHAR(255),
last_name VARCHAR(255),
salary INTEGER,
contract_length smallint
);

INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Steven','King',10000,3);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Neena','Kochhar',8000,2);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('David','Austin',12000,2);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Nancy','Greenberg',3000,1);

-- Write a query that returns the First and Last Name of every employee earning between 5-11k
SELECT * FROM employee WHERE salary >= 5000 AND salary <= 11000;
-- Which employees are employed for less than 2 years?
SELECT * FROM employee WHERE contract_length < 2;
-- Add two more employees to the table, make up the data.
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Donald','King',7500,2);
INSERT INTO employee (first_name,last_name,salary,contract_length) VALUES ('Pat','King',9000,1);
-- Nancy Greenberg got a new contract, 2 years, 8000 salary. Update the table.
UPDATE employee SET salary = 8000, contract_length = 2 WHERE employee_id = 4;
-- Sort the table by salary, from high to low. You might want to look here if you are stuck.
SELECT * FROM employee ORDER BY salary DESC;