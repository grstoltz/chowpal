const expect = require('chai').expect;
const db = require('../models').db;
const awsController = require('../controllers/awsController');
const foodController = require('../controllers/foodController');
const itemController = require('../controllers/itemController');
const upcController = require('../controllers/upcController');
const userController = require('../controllers/userController');

const User = db.User;

describe('ChowPal Server Testing', () => {
  describe('awsController', () => {
    it('should exist', () => {
      expect(awsController).to.exist;
    });
  });
  describe('foodController', () => {
    it('should exist', () => {
      expect(foodController).to.exist;
    });
  });
  describe('itemController', () => {
    it('should exist', () => {
      expect(itemController).to.exist;
    });
  });
  describe('upcController', () => {
    it('should exist', () => {
      expect(upcController).to.exist;
    });
  });
  describe('userController', () => {
    it('should exist', () => {
      expect(userController).to.exist;
    });
  });
});

