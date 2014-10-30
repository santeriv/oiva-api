var request = require('request'),
  pdf_extract = require('pdf-extract'); // pdf-extract https://www.npmjs.org/package/pdf-extract

var inspect = require('eyes').inspector({
  maxLength: 20000
});

module.exports = {
  raportti_huomiot: raportti_huomiot
};

function raportti_huomiot(req, res) {
  var tarkastustunnus = req.swagger.params.tarkastustunnus.value || '',
    tunnus = req.swagger.params.tunnus.value || '';

  var url = "https://oiva.evira.fi/kohteet/" + tunnus + "/raportit/" + tarkastustunnus + "/pdf";

  raportti(url, function(err, huomiot) {
    if (err) res.json(err);

    res.json({
      huomiot: huomiot
    });
  });
}

function raportti(url, callback) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {

      var absolute_path_to_pdf = '/Users/teemu/Downloads/Mevlana.pdf';
      var options = {
        type: 'text' // extract the actual text in the pdf file
      };

      var processor = pdf_extract(absolute_path_to_pdf, options, function(err) {
        if (err) {
          return callback(err);
        }
      });
      processor.on('complete', function(data) {
        //inspect(data.text_pages, 'extracted text pages');
        var pages = data.text_pages.join(' ');
        var huomiot = pages.substring(pages.lastIndexOf('Observation') + 11, pages.indexOf('Valvontayksikk')).trim();
        return callback(null, huomiot);
      });
      processor.on('error', function(err) {
        inspect(err, 'error while extracting pages');
        return callback(err);
      });
    }
  });
}