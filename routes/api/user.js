const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.findUser)
  .post(userController.createOne)
  .put(userController.findOneAndUpdate)
  .delete(userController.deleteOne);

module.exports = router;
