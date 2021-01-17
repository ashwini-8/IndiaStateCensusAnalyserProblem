const csv = require('csv-parser')
const fs = require('fs')
var path = require('path');

class CensusAnalyser {
    constructor(file ) { 
        this.file =  file;
    }
  
    indiaStateAnalyser(file) {
        return new Promise((resolve, reject) => {
          let result = []
          fs.createReadStream(file)
          .pipe(csv())
          .on('headers', (header) => {                                                                //wrong header
              if(header[0] != 'State' ||
                  header[1] != 'Population' || 
                  header[2] != 'AreaInSqKm' || 
                  header[3] != 'DensityPerSqKm') {
                  reject(new Error('Invalid Header Exception'))
              }
          })
          .on('data', (data) => {
              if(data.State == '' || data.Population == '' || data.AreaInSqKm == '' || data.DensityPerSqKm == '') {
                  reject(new Error('Invalid Delimiter Exception'));
              }
              else {
                  result.push(data);
              }
          })
          .on('end', () => {
              resolve(result)                                                            //no of records matching
          })    
       })
    }
}
module.exports = CensusAnalyser;


