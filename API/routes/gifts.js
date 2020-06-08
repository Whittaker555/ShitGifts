var express = require('express');
var router = express.Router();
var AWS = require("aws-sdk");
var config = require('../dataAccess/config/config')
const isDev = process.env.NODE_ENV !== 'production';


/* GET gift */
router.get('/', function(req, res, next) {
  AWS.config.update(config.aws_remote_config);
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
      TableName: config.aws_table_name
    };
  
  docClient.scan(params, function(err, data) {
      if(err){
          console.log(err);
          //handle
      } else{
        res.json({
          randomGift: data.Items[Math.floor(Math.random() * data.Items.length)]
        });
      }
  })
});


module.exports = router;
