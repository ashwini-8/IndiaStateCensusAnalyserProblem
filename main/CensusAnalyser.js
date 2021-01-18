const csv = require('csv-parser')
const fs = require('fs')
var path = require('path');
const write = require('../main/index')

class CensusAnalyser {
    constructor(file ) { 
        this.file =  file;
    }
  
    indiaStateAnalyser(file) {
        return new Promise((resolve, reject) => {
            let result = []
            fs.createReadStream(file)
            .pipe(csv())
            /*.then(data => {
                data.sort((data1, data2) => {
                  let state1 = data1.State.toUppercase();
                  let state2 = data2.State.toUppercase();
                      if(state1 < state2) {
                          return -1
                      } else if(state1 > state2) {
                          return 1
                      } else {
                          return 0
                      }
                  })
                console.log('sorting: ', data);
                fs.writeFileSync ('converted.json'
                ,JSON.stringify(data, null, 4));
              })*/
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

    sortByState(file) {
        return new Promise((resolve, reject) => {
            this.indiaStateAnalyser(file)
                .then(data => {
                data.sort((data1, data2) => {

                    let state1 = data1.State
                    let state2 = data2.State
                    if(state1 < state2) {
                        return -1
                    } else if(state1 > state2) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    //console.log('sorted data :', data)
                    write(data)
                    resolve(data);
                })
        })
    } 

    sortByPopulation(file) {
        return new Promise((resolve, reject) => {
            this.indiaStateAnalyser(file)
                .then(data => {
                data.sort((data1, data2) => {
                    let state1 = data1.Population
                    let state2 = data2.Population
                    if(state1 < state2) {
                        return -1
                    } else if(state1 > state2) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    //console.log('sorted data :', data)
                    write(data)
                    resolve(data);
                })
        })
    }

    sortByPopulationDensity(file) {
        return new Promise((resolve, reject) => {
            this.indiaStateAnalyser(file)
                .then(data => {
                data.sort((data1, data2) => {
                    let state1 = data1.DensityPerSqKm
                    let state2 = data2.DensityPerSqKm
                    if(state1 < state2) {
                        return -1
                    } else if(state1 > state2) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    //console.log('sorted data :', data)
                    write(data)
                    resolve(data);
                })
        })
    }
}
module.exports = CensusAnalyser;


