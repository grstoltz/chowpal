const ZebraCrossing = require('zebra-crossing');
const fs = require("fs")
const path = require("path");
const request = require("request")

// Gets UPC from an image
exports.getUPC = function(req, res) {
    ZebraCrossing.read(fs.readFileSync(path.join(__dirname, '../testupc.gif')), { pureBarcode: true })
    .then(data => {
        const upcString = data.parsed.toString('utf-8')
        console.log(upcString)

        const params = {
            UPC: upcString,
            id: req.body.id
        }

        const options = {
            method: 'put',
            body: params,
            json: true,
            url: "http://localhost:3000/api/item/"
          }

        request(options, (err, httpResponse, body) => { 
            if (err) {
                console.log(err)
                return res.json({ success: false, msg: 'cannot update item route' });
            }
            res.json(httpResponse);
        })
    });
};

exports.getUPCData = function(req, res){

    
}
