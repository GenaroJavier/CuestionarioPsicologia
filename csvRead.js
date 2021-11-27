var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream('./public/TestHablilidadesPensamiento1.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        //console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something with csvData
      //console.log(csvData);
    });
module.exports = csvData;
