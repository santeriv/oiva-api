
#Miten saan Oiva-API:n koneelleni

## Ympäristön asennus

- asenna npm (https://www.npmjs.org) ja node.js (http://nodejs.org)
- asenna pdf rippauksen riippuvuudet (https://github.com/nisaacson/pdf-extract)
- asenna redis (http://redis.io)

- asenna kehittämistä varten Apigeen julkaisema a127 toolkit (https://github.com/apigee-127/a127-documentation/wiki)
- eli aja npm install -g a127

### Mikä on a127?
- Build APIs in Node.js and Swagger 2.0 with Apigee-127 https://www.youtube.com/watch?v=Fw43z14Y1Xw

## Sovelluksen lataus, ajaminen ja muokkaaminen
- asenna git-versionhallintaohjelma
- kloonaa sovellus koneellesi git clone https://github.com/teemujonkkari/oiva-api.git
- siirry oiva kansioon cd oiva-api
- asenna node modulit npm install
- a127 project start käynnistää palveminen
- a127 project edit käynnistää rajapinnan määrittelytyökalun

## TODOs
- Swagger taitaja
- Pysyvä koti palvelulle
- Pdf rippauksen korjaaja
- Kommentteja ja kehitysehdotuksia
