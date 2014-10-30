'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  edistynyt_haku: edistynyt_haku
};

function edistynyt_haku(req, res) {
  var kohdetyyppi = req.swagger.params.kohdetyyppi.value || '',
    nimi = req.swagger.params.nimi.value || '',
    katu = req.swagger.params.katu.value || '',
    postinumero = req.swagger.params.postinumero.value || '',
    kunta = req.swagger.params.kunta.value || '';

  var url = "https://oiva.evira.fi/kohteet/advanced/?kohdetyyppi=" + kohdetyyppi + "&nimi=" + nimi + "&katu=" + katu + "&postinumero=" + postinumero + "&kunta=" + kunta;

  req.pipe(request(url)).pipe(res);
}