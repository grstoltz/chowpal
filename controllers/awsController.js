const AWS = require('aws-sdk');

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
        })
    }
    
    sendRekcognition()
};
