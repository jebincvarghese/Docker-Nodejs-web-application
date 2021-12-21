   'use strict';
   var express = require('express');
   var app = express();
   app.get('/', function (req, res) {
     res.send('<h1><center>Node.js Application : v1</h1></center>');
   });
   app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
   });

