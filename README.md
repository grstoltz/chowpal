# chowpal

![logo](https://github.com/grstoltz/chowpal/blob/master/client/public/logo.png)

---
# Overview

ChowPal is a web application for grocery shoppers who are unsatisfied with the current process of assembling a shopping list along with monitoring what foods they have purchased in the past and currently have in their possession. Our application is a smart alternative to the manual process of creating a grocery list and monitoring current supplies. Instead we will use automatic receipt parsing and product recognition to determine what foods you have in your possession. Unlike alternative applications that require manual entry of items or scanning of individual UPC codes, our product allows for the easy intake of multiple items at once by utilizing past users’ receipt data, allowing for a user to quickly see what they have or need to buy in the future.Pissedtrest is a Pinterest clone...Instead of pinning things you like, you pin things you HATE. For all those times when people hang toilet paper wrong, take up two parking spaces, or make products that don't work properly... Here is your place to vent about it.

---
Check out the app running on heroku here: 

---
# Screenshot
![Screenshot](https://github.com/grstoltz/chowpal/blob/master/client/public/screen-shot.jpg)

---
# File upload
![GIF]()

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
* dotenv npm Package - https://www.npmjs.com/package/dotenv
* cookie-parser npm Package - https://www.npmjs.com/package/cookie-parser
* mocha npm Package - https://mochajs.org/
* chai npm Package - https://www.npmjs.com/package/chai
* crypto
* Zebra Crossing
* Google Strategy
* semantics3-node



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
