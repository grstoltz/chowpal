drop table Food_LookUp

CREATE TABLE Food_LookUp (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  UPC varchar(255),
  brand varchar(255),
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE '/Users/trish/Grocery.csv'

LOAD DATA LOCAL INFILE '/Chowpal/database/Grocery.csv'
INTO TABLE chowpal_db.food_lookUP
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(name, UPC, brand);

select * from food

select count(*)
from food



select length(UPC), count(*)
from food
group by length(UPC)

UPDATE food SET UPC = LPAD(UPC, 12, '0');

select * from food
