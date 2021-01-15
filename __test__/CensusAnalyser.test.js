const { test, expect } = require('@jest/globals')
const { resolve } = require('path');

const CensusAnalyser = require('../main/CensusAnalyser')
const INDIA_STATE_CENSUS_CSV = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\IndiaStateCensusData.csv"
const INDIA_STATE_CENSUS_CSV_WRONG_EXTENSION = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\INDIA_STATE_CENSUS_CSV_WRONG_PATH.txt"
const INDIA_STATE_CENSUS_CSV_WRONG_FILE_PATH = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\WrongFileContentIndiaStateCensusDa.csv"
const INDIA_STATE_CENSUS_CSV_WRONG_DELIMITER = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\WrongDelimiterIndiaStateCensusData.csv"

describe('testsForIndiaStateCensusCSV', () => {

    test('givenStateCensusFile_ShouldReturnfileLength',() => { 
        const censusAnalyser = new CensusAnalyser()
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV)
        .then(data =>expect(data.length).toEqual(58))
    })
    
   test('givenStateCensusFile_WhenFileFoundIncorrect_ShouldThrowCustomWrongFilePathException', () => {
        const censusAnalyser = new CensusAnalyser();
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV_WRONG_FILE_PATH)
        .catch(error => expect(error.message).toBe('invalid file type Exception'))
    })
    
     test('givenStateCensusFile_WhenFileFoundWithIncorrectExtension_ShouldThrowCustomWrongFileExtensionException', () => {
        const censusAnalyser = new CensusAnalyser();
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV_WRONG_EXTENSION)
        .catch(error => expect(error.message).toBe('invalid file type Exception'))
    })
    
    test('givenStateCensusFile_WhenHeaderMisMatched_shouldThrowWrongHeaderException', () => {
        const censusAnalyser = new CensusAnalyser();
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV)
        .catch(error => expect(error.message).toBe('Invalid Header Exception'))
    })
    
    test('givenStateCensusFileIfCorrect_ButDelimitterIncorrect_ShouldThrowWrongDelimiterException', () => {
        const censusAnalyser = new CensusAnalyser();
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV)
        .catch(error => expect(error.message).toBe('Invalid Delimiter Exception'))
    });

})
