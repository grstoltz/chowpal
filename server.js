const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const models = require('./models');
const passport = require('passport');

const PORT = process.env.PORT || 3001;
const app = express();

const db = models.db;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Sequelize listening on PORT ${PORT}`);
  });
});
