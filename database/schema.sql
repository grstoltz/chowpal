DROP DATABASE chowpal_db;
CREATE DATABASE chowpal_db;
USE chowpal_db;


CREATE TABLE user (
  id int(11) AUTO_INCREMENT NOT NULL,
  google_id varchar(255) NOT NULL,
  user_name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE food (
  id int(11) AUTO_INCREMENT NOT NULL,
  user_id int(11) NOT NULL,
  name varchar(255) NOT NULL,
  UPC varchar(255),
  brand varchar(255),
  purchase_date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE item (
  id int(11) AUTO_INCREMENT NOT NULL,
  user_id int(11) NOT NULL,
  UPC varchar(255) NOT NULL,
  store varchar(255),
  product_name varchar(255),
  product_id varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE food_lookUp (
  id int(11) AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  UPC varchar(255),
  brand varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE recipe (
  id int(11) AUTO_INCREMENT NOT NULL,
  title varchar(255) NOT NULL,
  url varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
