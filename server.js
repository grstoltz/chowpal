const dotenv = require('dotenv').config()
const express = require("express");
const path = require("path");
const logger = require("morgan")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
var models = require("./models");
var db = models.db




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} 

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Sequelize listening on PORT " + PORT);
  });
});
