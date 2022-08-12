var express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { mongoManager } = require('./src/mongo');

var app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoManager.connect();

app.use('/api/v1', api());

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('app listening on port 8080!');
})