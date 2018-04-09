const router = require("express").Router();
const upcController = require('../../controllers/upcController');

router.route("/")
    .get(upcController.findAll)
    .post(upcController.createOne)
    .put(upcController.findOneAndUpdate)
    .delete(upcController.deleteOne);

module.exports = router;
