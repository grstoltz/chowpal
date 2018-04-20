const router = require('express').Router();
const upcController = require('../../controllers/upcController');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const AWS = require('aws-sdk');

// Set your AWS credentials
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-west-2',

// });

// const s3 = new AWS.S3();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.S3_BUCKET,
//     acl: 'public-read',
//     key(req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   }),
// });

router.route('/')
  .post(upload.any(), upcController.getUPC);

router.route('/data')
  .post(upcController.getUPCData);

module.exports = router;
