const AWS = require('aws-sdk');
const data = require('./awsRes.json');
const axios = require('axios');
const request = require('request');

// Set your AWS credentials
AWS.config.update({
    "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    "region": 'us-west-2',
});

const rekognition = new AWS.Rekognition();

exports.processItem = function(req, res) {

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
        const itemArr = data.TextDetections.map(element => {
           return element.DetectedText
        })
        console.log(itemArr[2])

        const params = {
            product_name: "New Item",
            store: "target",
            UPC: "UPCSTRING",
            product_id: "idstring"
        }

        var options = {
            method: 'post',
            body: params,
            json: true,
            url: "http://localhost:3000/api/item/"
          }

        request(options, (err, httpResponse, body) => { 
            if (err) {
                console.log(err)
                return res.json({ success: false, msg: 'cannot post to item route' });
            }
            res.json(httpResponse);
        });
    }

    parseData(data)

};

exports.processUPC = function(req, res){

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
    
    //Parses data from returned JSON from receipt image
    const parseData = function(data){
        const itemArr = data.TextDetections.map(element => {
           return element.DetectedText
        })
        console.log(itemArr[2])

        //item is currently hardcoded for testing purposes
        const params = {
            product_name: "New Item",
            store: "target",
            UPC: null,
            product_id: "idstring"
        }

        //Request options
        const options = {
            method: 'post',
            body: params,
            json: true,
            url: "http://localhost:3000/api/item/"
          }
        
        //Takes the product name and queries the database, if the product name does not exist in the database a new item is created
        //See item controller for querying properties
        request(options, (err, httpResponse, body) => { 
            if (err) {
                console.log(err)
                return res.json({ success: false, msg: 'cannot post to item route' });
            }
            res.json(httpResponse);
        });
    }

    parseData(data)

}
