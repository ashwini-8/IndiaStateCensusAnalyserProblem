const IndiaStatecode = require('../main/IndiaStatecode')
const nosuchfileInvalidExtension = require('../main/NosuchfileInvalidExtension')

const INDIA_STATE_CODE = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\Resources\\IndiaStateCode.csv"
const INDIA_STATE_CODE_WRONG_EXTENSION = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\Resources\\WrongExtensionIndiaStateCode.txt"
const INDIA_STATE_CODE_WRONG_FILE_PATH = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\Resources\\IndiaStateCode.csv"
const INDIA_STATE_CODE_WRONG_DELIMITER = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\Resources\\WrongDelimiterIndiaStateCode.csv"
const INDIA_STATE_CODE_WRONG_HEADER = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\Resources\\WrongHeaderIndiaStateCode.csv"

describe('testsForIndiaStateCensusCSV', () => {
    const indiaStatecode = new IndiaStatecode()
    test('givenStateCensusFile_ShouldReturnfileLength',() => { 
       return indiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE)
        .then(data => expect(data.length).toEqual(37));
    })
    
   test('givenStateCensusFile_WhenFileFoundIncorrect_ShouldThrowCustomWrongFilePathException', async () => {
        return  nosuchfileInvalidExtension(INDIA_STATE_CODE_WRONG_FILE_PATH)
        .catch(error => expect(error.message).toBe('Invalid file path Exception'))
    },10000)
    
    test('givenStateCensusFile_WhenFileFoundWithIncorrectExtension_ShouldThrowCustomException', () => {
        return nosuchfileInvalidExtension(INDIA_STATE_CODE_WRONG_EXTENSION)
        .catch(error => expect(error.message).toBe('Invalid file type Extension'))
    })
    
    test('givenStateCensusFile_WhenHeaderMisMatched_shouldThrowWrongHeaderException', () => {
        return indiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_HEADER)
        .catch(error => expect(error.message).toBe('Invalid Header Exception'))
    })
    
    test('givenStateCensusFileIfCorrect_ButDelimitterIncorrect_ShouldThrowWrongDelimiterException', () => {
        return indiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_DELIMITER)
        .catch(error => expect(error.message).toBe('Invalid Delimiter Exception'))
    });
})

describe('Sort data by state ', () => {
    const indiaStatecode = new IndiaStatecode()
    test('givenStateCensusFile_WhenDataStoredInSorted_TestShouldPass', () =>{
        return indiaStatecode.sortByStateCode(INDIA_STATE_CODE).then(data => {
            expect(data[0].StateCode).toBe('AD')
            expect(data[36].StateCode).toBe('WB')
        })
    })
})