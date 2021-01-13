const csv = require('csv-parser')
const fs = require('fs')
let result = []
class CensusAnalyser {
  constructor() {}
    indiaStateAnalyser(CSV_DATA) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(CSV_DATA)
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => {
          resolve(result)
          error => reject(error)
    })
  })
  }
}
module.exports = CensusAnalyser;


