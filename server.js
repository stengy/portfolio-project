'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('./public'));


app.listen(PORT, function(){
  console.log('Listening in port:' + PORT);
})
