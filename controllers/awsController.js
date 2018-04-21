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
      parseData(data);
    });
  };

  // sendRekcognition()

  const parseReceipt = function (data) {
    const itemArr = data.TextDetections.map(element => element.DetectedText.toUpperCase());
    const regex = new RegExp('^[a-zA-Z][a-zA-Z0-9.,$;]+$');
    const filteredArr = itemArr.filter(element => regex.test(element));
    _.pullAll(filteredArr, [ 'SPECIAL', 'LOYALTY', 'NET', 'TOTAL', 'CASH', 'CHANGE', 'SUBTOTAL', 'DATE' ]);
    
    res.send(filteredArr);

    filteredArr.forEach((product) => {
      const params = {
        store: req.body.store,
        product_name: itemArr[2],
        user_id: req.body.user_id,
      };

      const options = {
        method: 'post',
        body: params,
        json: true,
        url: 'http://localhost:3000/api/item/',
      };

      // request(options, (err, httpResponse, body) => {
      //   if (err) {
      //     console.log(err);
      //     return res.json({ success: false, msg: 'cannot post to item route' });
      //   }
      //   console.log(body);
      //   res.json(body);
      // });
    });
  };

  parseReceipt(data);
};

exports.processUPC = function (req, res) {
  const sendRekcognition = function () {
    const params = {
      Image: {
        S3Object: {
          Bucket: process.env.S3_BUCKET,
          Name: '1522990846497.jpeg',
        },
      },
    };

    rekognition.detectText(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
      parseData(data);
    });
  };

  // sendRekcognition()

  // Parses data from returned JSON from receipt image
  const parseData = function (data) {
    const itemArr = data.TextDetections.map(element => element.DetectedText);
    console.log(itemArr[2]);
    

    // item is currently hardcoded for testing purposes
    const params = {
      product_name: 'New Item',
      store: 'target',
      UPC: null,
      product_id: 'idstring',
    };

    // Request options
    const options = {
      method: 'post',
      body: params,
      json: true,
      url: 'http://localhost:3000/api/item/',
    };

    // Takes the product name and queries the database, if the product name
    // does not exist in the database a new item is created
    // See item controller for querying properties
    request(options, (err, httpResponse, body) => {
      if (err) {
        console.log(err);
        return res.json({ success: false, msg: 'cannot post to item route' });
      }
      res.json(httpResponse);
    });
  };

  parseData(data);
};
