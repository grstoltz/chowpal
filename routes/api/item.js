const router = require('express').Router();
const itemController = require('../../controllers/itemController');

router.route('/')
  .get(itemController.findAll)
  .post(itemController.findOrCreate)
  .put(itemController.findOneAndUpdate)
  .delete(itemController.deleteOne);

router.route('/:id')
  .get(itemController.findOne);

module.exports = router;
