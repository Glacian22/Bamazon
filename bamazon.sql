DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES 
 ("moon shoes", "footwear", 15.75, 19),
 ("dance shoes", "footwear", 21.00, 30),
 ("back massager", "adult novelties", 79.25, 27),
 ("personal lubricant", "adult novelties", 16.99, 12),
 ("waffle maker", "kitchen", 29.99, 9),
 ("pirate shirt", "menswear", 34.50, 65),
 ("extra tight pants", "menswear", 25, 31),
 ("ordinary jeans", "menswear", 27.90, 42),
 ("cute blue dress", "ladieswear", 65.00, 7),
 ("pinstripe romper", "ladieswear", 47.77, 13),
 ("box fan", "appliances", 20.00, 34)
;