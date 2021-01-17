const csvtojson = require('csvtojson')
const csvfilepath = 'C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\IndiaStateCensusData.csv'
const fs = require('fs');

let user = fs.readFileSync('converted.json','utf-8');
let data = JSON.parse(user);


csvtojson()
.fromFile(csvfilepath)
.then((data) => {
    console.log(data)
    fs.writeFileSync ('converted.json'
    ,JSON.stringify(data, null, 4));
})





