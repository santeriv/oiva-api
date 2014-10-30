'use strict';

var a127 = require('a127-magic'),
  express = require('express'),
  cors = require('cors'),
  app = express();

app.use(cors());

// uncomment the following if you need to parse incoming form data
//app.use(express.bodyParser());

app.use(a127.middleware());

app.listen(process.env.PORT || 8080);