'use strict';

var request = require('request');

module.exports = {
  haku: haku
};

function haku(req, res) {
  var text = req.swagger.params.hakusana.value || '';
  var url = "https://oiva.evira.fi/kohteet/basic/?text=" + text;
  req.pipe(request(url)).pipe(res);
}