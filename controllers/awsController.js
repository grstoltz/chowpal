const AWS = require('aws-sdk');
const request = require('request');
const data = require('./awsRes.json');
const _ = require('lodash');

// Set your AWS credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-2',
});

const rekognition = new AWS.Rekognition();

exports.processItem = function (req, res) {
  console.log(req.files);

  const sendRekcognition = function () {
    const params = {
      Image: {
        S3Object: {
          Bucket: process.env.S3_BUCKET,
          Name: req.files[0].key,
        },
      },
    };

    rekognition.detectText(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      parseReceipt(data);
    });
  };

  sendRekcognition();

  const parseReceipt = function (data) {
    const conditions = [ 'SPECIAL', 'LOYALTY', 'NET', 'TOTAL', 'CASH', 'CHANGE', 'SUBTOTAL', 'DATE', 'KG' ];
    const itemArr = data.TextDetections.map(element => element.DetectedText.toUpperCase());
    _.remove(itemArr, item => conditions.some(el => item.includes(el)));
    const filteredItemArr = itemArr.map(el => el.replace(/[^A-Za-z\t ]+\s*/g, '').trim()).filter(el => el.length);
    _.pullAll(filteredItemArr, conditions);

    filteredItemArr.forEach((product) => {
      const params = {
        store: req.body.store,
        product_name: product,
        user_id: req.body.user_id,
      };

      const options = {
        method: 'post',
        body: params,
        json: true,
        url: 'http://localhost:3000/api/item/',
      };

      request(options, (err, httpResponse, body) => {
        if (err) {
          console.log(err);
          return res.json({ success: false, msg: 'cannot post to item route' });
        }
        console.log(body);
      });
    });
  };
};
