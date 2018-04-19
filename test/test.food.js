// NODE_ENV=test mocha ./test
const expect = require('chai').expect;
const prepare = require('mocha-prepare');
const fs = require('fs');
const db = require('../models').db;
const upcController = require('../controllers/upcController');

const Food = db.Food;
const User = db.User;
const Item = db.Item;

describe('ChowPal Database Testing', () => {
  /* eslint no-undef: 0, prefer-arrow-callback: 0 */
  before(function (done) {
    this.timeout(10000);
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
  it('should load user', (done) => {
    const userObj = {
      google_id: '108480614932320425425',
      user_name: 'tmederos',
    };
    User
      .create(userObj)
      .then((user) => {
      // do some tests on user here
        console.log('New User Id - ', user.id);
        return User
          .findOne({ where: { id: user.id } });
      })
      .then((foundUser) => {
        expect(foundUser).to.not.be.null;
        console.log('Query New User: ', foundUser.google_id);
        console.log('Query New Name - ', foundUser.user_name);
        done();
      });
  });

  describe('User Model', () => {
    it('Should select all users', (done) => {
      User
        .findAll()
        .then((users) => {
          expect(users).to.exist;
          for (let i = 0; i < users.length; i += 1) {
            console.log('User ID -  ', users[i].id);
            console.log('User GoogleID -  ', users[i].google_id);
            console.log('User user_name -  ', users[i].user_name);
          }
          done();
        });
    });
  });

  it('should load food', (done) => {
    const userFood = {
      name: 'Baked Lays',
      UPC: '002840018382',
      brand: 'Lays',
      user_id: 1,
    };
    Food
      .create(userFood)
      .then((food) => {
      // do some tests on food here
        console.log('New Food Id - ', food.id);
        return Food
          .findOne({ where: { id: food.id } });
      })
      .then((foundFood) => {
        expect(foundFood).to.not.be.null;
        console.log('Query New Food name: ', foundFood.name);
        console.log('Query New Food UPC: ', foundFood.UPC);
        console.log('Query New Food brand: ', foundFood.brand);
        done();
      });
  });

  it('should load item', (done) => {
    const userItem = {
      user_id: 1,
      UPC: '028400047708',
      store: 'Walmart',
      product_name: 'Pretzel Sticks',
      product_id: '007332100018',
    };
    Item
      .create(userItem)
      .then((item) => {
      // do some tests on item here
        console.log('New Item Id - ', item.id);
        return Item
          .findOne({ where: { id: item.id } });
      })
      .then((foundItem) => {
        console.log('Query New Item UPC: ', foundItem.UPC);
        console.log('Query New Item store: ', foundItem.store);
        console.log('Query New Item product name: ', foundItem.product_name);
        console.log('Query New Item product id: ', foundItem.product_id);
        done();
      });
  });
});
