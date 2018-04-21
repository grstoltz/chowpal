DROP DATABASE awfxm1rln2ik9gi3;
CREATE DATABASE awfxm1rln2ik9gi3;
USE awfxm1rln2ik9gi3;


CREATE TABLE awfxm1rln2ik9gi3.user (
  id int(11) AUTO_INCREMENT NOT NULL,
  google_id varchar(255) NOT NULL,
  user_name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE awfxm1rln2ik9gi3.food (
  id int(11) AUTO_INCREMENT NOT NULL,
  user_id varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  UPC varchar(255),
  brand varchar(255),
  purchase_date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE awfxm1rln2ik9gi3.item (
  id int(11) AUTO_INCREMENT NOT NULL,
  user_id varchar(255) NOT NULL,
  UPC varchar(255) NOT NULL,
  store varchar(255),
  product_name varchar(255),
  product_id varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE awfxm1rln2ik9gi3.food_lookUp (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  UPC varchar(255),
  brand varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE awfxm1rln2ik9gi3.recipe (
  id int(11) AUTO_INCREMENT NOT NULL,
  title varchar(255) NOT NULL,
  url varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO  awfxm1rln2ik9gi3.user (google_id, user_name ) VALUES ( '108480614932320425425', 'tmederos');
INSERT INTO  awfxm1rln2ik9gi3.user (google_id, user_name ) VALUES ( '108480614932320425566', 'gstoltz');
INSERT INTO  awfxm1rln2ik9gi3.user (google_id, user_name ) VALUES ( '108480614932320425577', 'tboardman');


INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (1, 'Idaho Spuds instant Mashed Potatoes', '018000425006', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (1, "Lay's Kettle Cooked 40% Less Fat Salt & Vinegar Flavored Potato Chips", '028400251136', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (1, 'Rold Gold Pretzel Sticks', '028400047708', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (1, 'Baked Lays', '002840018382', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (1, "Campbell's Healthy Request Condensed Soup, Cream of Mushroom", '005100006007', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2, 'Diet Mountain Dew Cans', '001200000170', 'pantry', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2,'Lean Cuisine Four Cheese Pizza', '013800272355', 'Pizza', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2,'Lean Cuisine Pepperoni Pizza,', '013800537515', 'Pizza', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2,'Arnold Whole Grains 100% Whole Wheat Sliced Bread', '013800272355', 'Pizza', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2,'Jennie O Turkey Bacon', '013800537515', 'Pizza', '2018-04-17' );

INSERT INTO awfxm1rln2ik9gi3.food (user_id, name, UPC, brand, purchase_date )
  VALUES (2,'Rold Gold Pretzel Sticks', '028400047708', 'Pizza', '2018-04-17' );


INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 2, '028400047708' , 'Walmart', 'Pretzel Sticks','007332100018' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 2,'018000425006' , 'Walmart', 'Mashed Potato','002970000112' ) ;

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 2,'012000809972' , 'Walmart', 'Mt Dew DT','001200000170' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 1,'028400251136' , 'Walmart', 'Lays Kettle','002840037219' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 1, '051000060075' , 'Walmart', 'Camp Soup','005100006007' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES (  1, '028400183826' , 'Walmart', 'Baked Lays','002840018382' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES (  1, '028400047708' , 'Target', 'RLD GLD STCK','071050219' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES (  1, '042222870009' , 'Target', 'JENNIE O','210130152' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES ( 2, '073410013755' , 'Target', 'ARNOLDS','261010637' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES (  2, '013800272355' , 'Target', 'LEAN CUISINE','270020298' );

INSERT INTO awfxm1rln2ik9gi3.item( user_id, UPC, store, product_name, product_id )
  VALUES (  2, '013800537515' , 'Target', 'LEAN CUISINE','270020300' );
  


select count(*)
from food

select length(UPC), count(*)
from food
group by length(UPC)

UPDATE food SET UPC = LPAD(UPC, 12, '0');