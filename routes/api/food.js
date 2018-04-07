const router = require("express").Router();
const foodController = require('../../controllers/foodController');

router.route("/")
    .get(foodController.findAll)
    .get(foodController.findOne)
    .post(foodController.createOne)
    .put(foodController.findOneAndUpdate)
    .delete(foodController.deleteOne);

module.exports = router;
