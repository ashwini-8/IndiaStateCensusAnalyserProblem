const csv = require('csv-parser')
const fs = require('fs')
var path = require('path');
let result = []

class CensusAnalyser {
  constructor() {
  }

    indiaStateAnalyser(file) {
     // console.log(file)
      return new Promise((resolve, reject) => {

      if(!fs.existsSync(file)) {                                                                //wrong file path
       reject(new Error('invalid file type Exception'));
      }

      else{
        var extension = path.extname(file);                                                      //wrong file extension
        if (extension != '.csv') {
        reject(new Error('invalid file type Exception'));
        }
      }
      fs.createReadStream(file)
      .pipe(csv())
      .on('headers', (header) =>{                                                                //wrong header
            if(header[0] != 'State' ||
              header[1] != 'Population' || 
              header[2] != 'AreaInSqKm' || 
              header[3] != 'DensityPerSqKm') {
              reject(new Error('Invalid Header Exception'))
            }
      })
      .on('data', (data) =>{
          result.push(data);
          if(data.State == '' || data.Population == '' || data.AreaInSqKm == '' || data.DensityPerSqKm == '') {
              rejects(new Error('Invalid Delimiter Exception'));
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


