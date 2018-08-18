-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "favorite_db"products database --
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DashCam", "Automotive", 150, 49);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Windshield", "Automotive", 355, 46);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tire", "Automotive", 200, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 750, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camera", "Electronics", 350, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tablet", "Electronics", 150, 77);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GoPro", "Electronics", 275, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Popcorn", "Grocery", 4, 166);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chips", "Grocery", 3, 185);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomato", "Grocery", 2, 150);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lettuce", "Grocery", 1, 67);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lasagna", "Grocery", 5, 52);
