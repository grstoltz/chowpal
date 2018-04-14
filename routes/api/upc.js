const router = require('express').Router();
const upcController = require('../../controllers/upcController');

const newLocal = upcController.getUPC;
router.route('/')
  .post(newLocal);

router.route('/data')
  .post(upcController.getUPCData);

module.exports = router;
