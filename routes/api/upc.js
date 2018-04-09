const router = require("express").Router();
const upcController = require('../../controllers/upcController');

router.route("/")
    .post(upcController.getUPC)

router.route("/data")
    .post(upcController.getUPCData)

module.exports = router;
