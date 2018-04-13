'use strict';
// NODE_ENV=test mocha ./test
var expect = require('chai').expect;
var prepare = require('mocha-prepare');
var fs = require('fs');

var db = require('../models').db;
var Food = db.Food;
var User = db.User;
var Item = db.Item;


describe('ChowPal Database Testing', function (){
before(function(done) {
  // runs before all tests in this block
  // drops table and re-creates it
  db.sequelize.sync({ force: true })
    .then((out) => {
      done();
    })
    .catch((error) => {
      done(error);
    });
  });
  // Insert a user
  it('should load user', function (done) {
    var userObj = {
      user_id: '108480614932320425425',
      user_name: 'tmederos'
    };
    User
    .create( userObj )
    .then( function (user) {
      // do some tests on user here
      console.log( 'New User Id - ', user.id );
      return User
      .findOne({ where: { id: user.id } })
      })
    .then((foundUser) => {
      expect(foundUser).to.not.be.null
      console.log( 'Query New User: ', foundUser.user_id);
      console.log( 'Query New Name - ', foundUser.user_name );
      done();
    })
  });

  it('should load food', function (done) {
    var userFood = {
      name: 'Baked Lays',
      UPC: '002840018382',
      category: 'Pantry'
    };
    Food
    .create( userFood )
    .then( function (food) {
      // do some tests on food here
      console.log( 'New Food Id - ', food.id);
      return Food
      .findOne({ where: { id: food.id } })
    })
    .then((foundFood) => {
      expect(foundFood).to.not.be.null
      console.log( 'Query New Food name: ', foundFood.name);
      console.log( 'Query New Food UPC: ', foundFood.UPC);
      console.log( 'Query New Food category: ', foundFood.category);
      done();
    })
  });


  it('should load item', function (done) {
    var userItem = {
      UPC: '028400047708',
      store: 'Walmart',
      product_name: 'Pretzel Sticks',
      product_id: '007332100018'
    };
    Item
    .create( userItem )
    .then( function (item) {
      // do some tests on item here
      console.log( 'New Item Id - ', item.id);
      return Item
      .findOne({ where: { id: item.id } })
    })
    .then((foundItem) => {
      console.log( 'Query New Item UPC: ', foundItem.UPC);
      console.log( 'Query New Item store: ', foundItem.store);
      console.log( 'Query New Item product name: ', foundItem.product_name);
      console.log( 'Query New Item product id: ', foundItem.product_id);
      done();
    })
  });
 });
