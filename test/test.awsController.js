let expect = require('chai').expect;

describe('awsController', function() {
    it('should exist', function() {
        expect(require('../controllers/awsController')).to.exist;
    });
});

describe('sendRekcognition'function(){

});

        const params = {
            Image: {
               S3Object: {
                  Bucket: process.env.S3_BUCKET,
                  Name: "1522990846497.jpeg",
               }
            }
         }
