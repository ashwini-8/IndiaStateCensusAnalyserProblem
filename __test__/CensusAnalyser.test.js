const CensusAnalyser = require('../main/CensusAnalyser')
const nosuchfileInvalidExtension = require('../main/NosuchfileInvalidExtension')
const INDIA_STATE_CENSUS_CSV = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\IndiaStateCensusData.csv"
const INDIA_STATE_CENSUS_CSV_WRONG_EXTENSION = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\INDIA_STATE_CENSUS_CSV_WRONG_PATH.txt"
const INDIA_STATE_CENSUS_CSV_WRONG_FILE_PATH = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\WrongFilePathIndiaStateCensusDat.csv"
const INDIA_STATE_CENSUS_CSV_WRONG_DELIMITER = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\WrongDelimiterIndiaStateCensusData.csv"
const INDIA_STATE_CENSUS_CSV_WRONG_HEADER= "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\WrongHeaderIndiaStateCensusData.csv"
describe('testsForIndiaStateCensusCSV', () => {

    const censusAnalyser = new CensusAnalyser();
    test('givenStateCensusFile_ShouldReturnfileLength',() => { 
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV)
        .then(data =>expect(data.length).toEqual(29))
    })
    
   test('givenStateCensusFile_WhenFileFoundIncorrect_ShouldThrowCustomWrongFilePathException', () => {
        return nosuchfileInvalidExtension(INDIA_STATE_CENSUS_CSV_WRONG_FILE_PATH)
        .catch(error => expect(error.message).toBe('Invalid file path Exception'))
    })
    
     test('givenStateCensusFile_WhenFileFoundWithIncorrectExtension_ShouldThrowCustomWrongFileExtensionException', () => {
        return nosuchfileInvalidExtension(INDIA_STATE_CENSUS_CSV_WRONG_EXTENSION)
        .catch(error => expect(error.message).toBe('Invalid file type Extension'))
    })
    
    test('givenStateCensusFile_WhenHeaderMisMatched_shouldThrowWrongHeaderException', () => {
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV_WRONG_HEADER)
        .catch(error => expect(error.message).toBe('Invalid Header Exception'))
    })
    
    test('givenStateCensusFileIfCorrect_ButDelimitterIncorrect_ShouldThrowWrongDelimiterException', () => {
       return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV_WRONG_DELIMITER)
        .catch(error => expect(error.message).toBe('Invalid Delimiter Exception'))
    })
})

describe('Sort data by state ', () => {
    const censusAnalyser = new CensusAnalyser();
    test('givenStateCensusFile_WhenDataStoredInSorted_TestShouldPass', () =>{
        return censusAnalyser.sortByState(INDIA_STATE_CENSUS_CSV).then(data => {
            expect(data[0].State).toBe('Andhra Pradesh')
            expect(data[28].State).toBe('West Bengal')
        })
    })
})
