const fs = require('fs')
var path = require('path');
let result1 = []

class IndiaStatecode {
  constructor() {
  }

    indiaStateCodefunction(file1) {
      return new Promise((resolve, reject) => {

      if(!fs.existsSync(file1)) {                                                                //wrong file path
       reject(new Error('invalid file type Exception'));
      }
      else{ 
        var extension = path.extname(file1);                                                      //wrong file extension
        if (extension != '.csv') {
          reject(new Error('invalid file type Exception'));
        }
      }
      fs.createReadStream(file1)
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
            result1.push(data);
            if(data.State == '' ||
                data.Population == '' || 
                data.AreaInSqKm == '' ||
                data.DensityPerSqKm == '') {
                rejects(new Error('Invalid Delimiter Exception'));
            }
            else {
                result1.push(data);
            }
          })
          .on('end', () => {
            resolve(result1)                                                            //no of records matching
          })  
            
      })
    }
}
module.exports = IndiaStatecode;