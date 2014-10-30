'use strict';

var request = require('request');

module.exports = {
  raportti_pdf: raportti_pdf
};

function raportti_pdf(req, res) {
  var tarkastustunnus = req.swagger.params.tarkastustunnus.value || '',
    tunnus = req.swagger.params.tunnus.value || '';

  var url = "https://oiva.evira.fi/kohteet/" + tunnus + "/raportit/" + tarkastustunnus + "/pdf";
  req.pipe(request(url)).pipe(res);
}