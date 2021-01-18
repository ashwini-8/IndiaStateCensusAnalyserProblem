const fs = require('fs')
var path = require('path');
const csv = require('csv-parser')
const writeToJson = require('../main/index')

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

  sortByStateCode(file) {
    return new Promise((resolve, reject) => {
        this.indiaStateCodefunction(file)
            .then(data => {
              data.sort((data1, data2) => {
                  let stateCode1 = data1.StateCode
                  let stateCode2 = data2.StateCode
                  if(stateCode1 < stateCode2) {
                      return -1
                  } else if(stateCode1 > stateCode2) {
                          return 1
                    } else {
                          return 0
                      }
                  })
                  //console.log('sorted data :', data)
                  writeToJson(data)
                  resolve(data);
            })
    })
  } 
}
module.exports = IndiaStatecode;