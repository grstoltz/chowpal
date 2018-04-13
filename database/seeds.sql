INSERT INTO  user (user_id, user_name ) VALUES ( '108480614932320425425', 'tmederos');
INSERT INTO  user (user_id, user_name ) VALUES ( '108480614932320425566', 'gstoltz');


INSERT INTO food (name, UPC, category )
  VALUES ('Idaho Spuds instant Mashed Potatoes', '018000425006', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ("Lay's Kettle Cooked 40% Less Fat Salt & Vinegar Flavored Potato Chips", '028400251136', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ('Rold Gold Pretzel Sticks', '028400047708', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ('Baked Lays', '002840018382', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ("Campbell's Healthy Request Condensed Soup, Cream of Mushroom", '005100006007', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ('Diet Mountain Dew Cans', '001200000170', 'pantry' );

INSERT INTO food (name, UPC, category )
  VALUES ('Lean Cuisine Four Cheese Pizza', '013800272355', 'Pizza' );

INSERT INTO food (name, UPC, category )
  VALUES ('Lean Cuisine Pepperoni Pizza,', '013800537515', 'Pizza' );

INSERT INTO food (name, UPC, category )
  VALUES ('Arnold Whole Grains 100% Whole Wheat Sliced Bread', '013800272355', 'Pizza' );

INSERT INTO food (name, UPC, category )
  VALUES ('Jennie O Turkey Bacon', '013800537515', 'Pizza' );

INSERT INTO food (name, UPC, category )
  VALUES ('Rold Gold Pretzel Sticks', '028400047708', 'Pizza' );


INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '028400047708' , 'Walmart', 'Pretzel Sticks','007332100018' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '018000425006' , 'Walmart', 'Mashed Potato','002970000112' ) ;

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '012000809972' , 'Walmart', 'Mt Dew DT','001200000170' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '028400251136' , 'Walmart', 'Lays Kettle','002840037219' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '051000060075' , 'Walmart', 'Camp Soup','005100006007' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '028400183826' , 'Walmart', 'Baked Lays','002840018382' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '028400047708' , 'Target', 'RLD GLD STCK','071050219' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '042222870009' , 'Target', 'JENNIE O','210130152' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '073410013755' , 'Target', 'ARNOLDS','261010637' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '013800272355' , 'Target', 'LEAN CUISINE','270020298' );

INSERT INTO item( UPC, store, product_name, product_id )
  VALUES ( '013800537515' , 'Target', 'LEAN CUISINE','270020300' );

INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '6' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '3' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '4' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '7' );
  INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '8' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '1' , '10' );

INSERT INTO user_food( user_id, food_id )
  VALUES ( '2' , '2' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '2' , '1' );
INSERT INTO user_food( user_id, food_id )
  VALUES ( '2' , '5' );
  INSERT INTO user_food( user_id, food_id )
  VALUES ( '2' , '6' );