const ZebraCrossing = require('zebra-crossing');
const fs = require('fs');
const path = require('path');
const request = require('request');
const crypto = require('crypto');
const axios = require('axios');

const api_key = process.env.SEM3KEY;
const api_secret = process.env.SEM3SECRET;

const sem3 = require('semantics3-node')(api_key, api_secret);

// Gets UPC from an image of a barcode
exports.getUPC = function (req, res) {
  console.log(req.files);
  // Uses ZebraCrossing to parse an image file **Using a static image
  // file currently**
  /* eslint max-len: 0 */
  // ZebraCrossing.read(fs.readFileSync(path.join(__dirname, '../testupc.gif'))
  ZebraCrossing.read(req.files[0].buffer, { pureBarcode: true })
    .then((data) => {
      const upcString = data.parsed.toString('utf-8');
      console.log(upcString);

      const params = {
        UPC: upcString,
        id: req.body.id,
        user_id: req.body.user_id,
      };

      const options = {
        method: 'put',
        body: params,
        json: true,
        url: 'http://localhost:3000/api/item',
      };

      // Sends a quests to update the item with the UPC that was parsed
      request(options, (err, httpResponse, body) => {
        if (err) {
          console.log(err);
          return res.json({ success: false, msg: 'cannot update item route' });
        }
        return res.json(httpResponse);
      });
    });
};

// Takes a UPC code and returns data from the digit-eyes API
exports.getUPCData = function (req, res) {
  sem3.products.products_field('upc', req.body.UPC);

  sem3.products.get_products((err, products) => {
    if (err) {
      console.log("Couldn't execute request: get_products");
      res.send(err);
    }
    console.log(`Results of request: ${JSON.stringify(products)}`);
    res.send(products);
  });
};

