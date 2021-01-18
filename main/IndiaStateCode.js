const fs = require('fs')
var path = require('path');
const csv = require('csv-parser')

class IndiaStatecode {
  constructor() {
  }
    indiaStateCodefunction(file) {
      return new Promise((resolve, reject) => {
        let result = []
      fs.createReadStream(file)
      .pipe(csv())
      .on('headers', (header) => {                                                       //wrong header
            if(header[0] != 'SrNo' ||
              header[1] != 'StateName' || 
              header[2] != 'TIN' || 
              header[3] != 'StateCode'){
              reject(new Error('Invalid Header Exception'))
          }
      })
      .on('data', (data) => {
            if(data.SrNo == undefined || data.StateName == undefined || data.TIN == undefined || data.StateCode == undefined) {
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
module.exports = IndiaStatecode;