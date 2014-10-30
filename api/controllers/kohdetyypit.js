'use strict';

var request = require('request');

module.exports = {
  kohdetyypit: kohdetyypit
};

function kohdetyypit(req, res) {
  req.pipe(request("https://oiva.evira.fi/kohdetyypit/")).pipe(res);
}