const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.findAll)
  .get(userController.findOne)
  .post(userController.createOne)
  .put(userController.findOneAndUpdate)
  .delete(userController.deleteOne);

module.exports = router;
