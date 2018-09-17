const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

let app = express();
app.use(bodyParser.json());




app.listen(config.port, () => {
  console.log("Started server on port", config.port)
});