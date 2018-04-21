const router = require('express').Router();
const path = require('path');
const awsController = require('../../controllers/awsController');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const models = require('../../models');

const db = models.db;


// Set your AWS credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',

});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    key(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

router.route('/')
  .post(upload.any(), awsController.processItem);

module.exports = router;
