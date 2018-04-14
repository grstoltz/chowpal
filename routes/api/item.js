const router = require('express').Router();
const itemController = require('../../controllers/itemController');

router.route('/')
  .get(itemController.findAll)
// .get(itemController.findOne)
// .post(itemController.createOne)
  .post(itemController.findOrCreate)
  .put(itemController.findOneAndUpdate)
  .delete(itemController.deleteOne);

module.exports = router;
