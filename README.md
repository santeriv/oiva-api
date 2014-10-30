oiva-api
========

#Miten saan Oiva-API:n koneelleni

## Ympäristön asennus

- asenna npm (https://www.npmjs.org) ja node.js (http://nodejs.org)
- asenna pdf rippauksen riippuvuudet (https://github.com/nisaacson/pdf-extract)
- asenna redis (http://redis.io)

- asenna kehittämistä varten Apigeen julkaisema a127 toolkit (https://github.com/apigee-127/a127-documentation/wiki)
- npm install -g a127

## Sovelluksen lataus, ajaminen ja muokkaaminen
- asenna git-versionhallintaohjelma
- klonaa sovellus koneellesi git clone https://github.com/teemujonkkari/oiva-api.git
- cd oiva-api
- a127 project start käynnistää palveminen
- a127 project edit käynnistää rajapinnan määrittelytyökalun

