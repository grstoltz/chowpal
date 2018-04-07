const AWS = require('aws-sdk');
const data = require('./awsRes.json');
const axios = require('axios');
// Set your AWS credentials
AWS.config.update({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": 'us-west-2',
});

exports.processOne = function(req, res) {

    const rekognition = new AWS.Rekognition();

    console.log(req.files)

    const sendRekcognition = function(){
      
        const params = {
            Image: { 
               S3Object: { 
                  Bucket: process.env.S3_BUCKET,
                  Name: "1522990846497.jpeg",
               }
            }
         }

        rekognition.detectText(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
            parseData(data)
        })
    }
    
    //sendRekcognition()
    
    const parseData = function(data){
        console.log(data)
        const itemArr = data.TextDetections.map(element => {
           return element.DetectedText
        })
        console.log(itemArr)
        res.send(itemArr[2])
        const params = {
            product_name: itemArr[2],
            store: "target",
            UPC: "UPCSTRING",
            product_id: "idstring"
        }
        axios.post("/api/item/", params)
    }

    parseData(data)
};
