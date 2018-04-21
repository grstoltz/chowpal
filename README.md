# chowpal

![logo](https://github.com/grstoltz/chowpal/blob/master/client/public/logoReadMeUse.png)

---
# Overview

ChowPal is a web application for grocery shoppers who are unsatisfied with the current process of assembling a shopping list along with monitoring what foods they have purchased in the past and currently have in their possession. Our application is a smart alternative to the manual process of creating a grocery list and monitoring current supplies. Instead we will use automatic receipt parsing and product recognition to determine what foods you have in your possession. Unlike alternative applications that require manual entry of items or scanning of individual UPC codes, our product allows for the easy intake of multiple items at once by utilizing past users’ receipt data, allowing for a user to quickly see what they have or need to buy in the future.

---
Check out the app running on heroku here: http://chowpal.herokuapp.com

---
# Screenshot - My Pantry
![Screenshot](https://github.com/grstoltz/chowpal/blob/master/client/public/mypantry.jpg)

---
# Receipt Upload
![Screenshot](https://github.com/grstoltz/chowpal/blob/master/client/public/load-receipt.jpg)

---
# Mobile Version
![Screenshot](https://github.com/grstoltz/chowpal/blob/master/client/public/mobile.jpg)

---
# Design Team
- Alan Drake - Front-end
- Trish Mederos – Back-end and testing
- David Rodriguez - Front-end
- Grant Stolz – Team Lead , Back-end development
- Abby Thoresen – Front-end, Logo design


---
Technologies used
* Node.js - https://nodejs.org/en/
* MySQL - https://www.mysql.com/
* Material Design for Bootstrap - https://mdbootstrap.com/react/
* body-parser npm Package - https://www.npmjs.com/package/inquirer
* express npm Package - https://www.npmjs.com/package/express
* sequelize npm Package - https://www.npmjs.com/package/sequelize
* passport npm Package - https://www.npmjs.com/package/passport
* passport-google-oauth20 npm Package - https://www.npmjs.com/package/passport-oauth2
* dotenv npm Package - https://www.npmjs.com/package/dotenv
* cookie-parser npm Package - https://www.npmjs.com/package/cookie-parser
* mocha npm Package - https://mochajs.org/
* chai npm Package - https://www.npmjs.com/package/chai
* Amazon Web Service - https://aws.amazon.com/
* Zebra Crossing - https://github.com/zxing/zxing
* semantics3-node - https://www.npmjs.com/package/semantics3-node-client


---
# Running Tests
Before you begin testing make sure you download the repository for Pissedtrest from GitHub. 
Install all the dependencies you need for the project and navigate to the working directory and do the following in your terminal

### Step 1
> npm install

The above command will install all the dependencies you need

### Step 2
Create test database in MySQL. Log into MySQL and run the test_schema.sql script to create the test database 

### Step 3
Start GitBash terminal, run:  
NODE_ENV=test node server.js

The above command will start the server using the test environment variables. The config object should print in the terminal, to show that the correct variables are being used. If you see "Sequelize listening on PORT 3000" in your CLI, then you're good to go.

### Step 4
Open a new GitBash instance and navigate to the working directory for Pissedtrest.

In the terminal type:
> npm test

The test file test.food.js will drop and recreate the tables in the database_test database. It will insert data into the user, food, and items tables and query the inserted data from the tables. The test.server.js will make sure all the controller files exist.

