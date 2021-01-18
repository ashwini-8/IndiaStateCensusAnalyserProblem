const csvtojson = require('csvtojson')
const csvfilepath = 'C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\IndiaStateCensusData.csv'
const fs = require('fs');

/*let user = fs.readFile("C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\converted.json",'utf-8' ,(err, data) => {
    if (err) throw err;
    console.log(data);
  }); //converts int array of objects 

let data = JSON.parse(user);*/


csvtojson()
.fromFile(csvfilepath)
.then((data) => {
    console.log(data)
    //fs.writeFileSync ('converted.json' // writes into file
    //,JSON.stringify(data, null, 4));
})

const write = data => {
    fs.writeFile ("C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\converted.json"
    , JSON.stringify(data, null, 2), function(err) {
        if (err) 
            throw err;
        }
    );
}
module.exports = write; 

