const ZebraCrossing = require('zebra-crossing');
const fs = require('fs');
const path = require('path');
const request = require('request');
const crypto = require('crypto');
const axios = require('axios');

// Gets UPC from an image of a barcode
exports.getUPC = function (req, res) {
  // Uses ZebraCrossing to parse an image file **Using a static image file currently**
  ZebraCrossing.read(fs.readFileSync(path.join(__dirname, '../testupc.gif')), { pureBarcode: true })
    .then((data) => {
      const upcString = data.parsed.toString('utf-8');
      console.log(upcString);

      const params = {
        UPC: upcString,
        id: req.body.id,
      };

      const options = {
        method: 'put',
        body: params,
        json: true,
        url: 'http://localhost:3000/api/item/',
      };

      // Sends a quests to update the item with the UPC that was parsed
      request(options, (err, httpResponse, body) => {
        if (err) {
          console.log(err);
          return res.json({ success: false, msg: 'cannot update item route' });
        }
        res.json(httpResponse);
      });
    });
};

// Takes a UPC code and returns data from the digit-eyes API
exports.getUPCData = function (req, res) {
  // Gets a signature based on the API key and the UPC code being passed in
  const hash = crypto.createHmac('sha1', process.env.UPC_AUTH_KEY).update(req.body.UPC).digest('base64');
  const url = `http://digit-eyes.com/gtin/v2_0/?upc_code=${req.body.UPC}
    &field_names=description,%20usage,%20brand,%20gcp_name_address,%20ingredients,%20language,%20nutrition,%20manufacturer,%20website,%20product_web_page,%20image,%20uom&language=en
    &app_key=${process.env.UPC_APP_KEY}&signature=${hash}`;

  // Queries the API and returns the item data (to use in the creation of the food item?)
  axios.get(url)
    .then((result) => {
      res.send(result.data);
    })
    .catch(err => console.log(err));
};

