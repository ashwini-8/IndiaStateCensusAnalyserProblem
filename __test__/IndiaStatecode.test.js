const IndiaStatecode = require('../main/IndiaStatecode')
const INDIA_STATE_CODE = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\Resources\IndiaStateCode.csv"
const INDIA_STATE_CODE_WRONG_EXTENSION = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\Resources\WrongExtensionIndiaStateCode.txt"
const INDIA_STATE_CODE_WRONG_FILE_PATH = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\Resources\IndiaStateCod.csv"
const INDIA_STATE_CODE_WRONG_DELIMITER = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\Resources\WrongDelimiterIndiaStateCode.csv"
const INDIA_STATE_CODE_WRONG_HEADER = "C:\Users\ashwi\Desktop\Bridgelabz\JavaScript\Assignments\IndiaStateCensusAnalyserProblem\main\Resources\WrongHeaderIndiaStateCode.csv"

describe('testsForIndiaStateCensusCSV', () => {

    test('givenStateCensusFile_ShouldReturnfileLength',() => { 
        const IndiaStatecode1 = new IndiaStatecode()
        return IndiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE)
        .then(data =>expect(data.length).toEqual(37))
    })
    
   test('givenStateCensusFile_WhenFileFoundIncorrect_ShouldThrowCustomWrongFilePathException', () => {
        const IndiaStatecode1 = new IndiaStatecode();
        return IndiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_FILE_PATH)
        .catch(error => expect(error.message).toBe('invalid file type Exception'))
    })
    
     test('givenStateCensusFile_WhenFileFoundWithIncorrectExtension_ShouldThrowCustomException', () => {
        const IndiaStatecode1 = new IndiaStatecode();
        return IndiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_EXTENSION)
        .catch(error => expect(error.message).toBe('invalid file type Exception'))
    })
    
    test('givenStateCensusFile_WhenHeaderMisMatched_shouldThrowWrongHeaderException', () => {
        const IndiaStatecode1 = new IndiaStatecode();
        return IndiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_HEADER)
        .catch(error => expect(error.message).toBe('Invalid Header Exception'))
    })
    
    /*test('givenStateCensusFileIfCorrect_ButDelimitterIncorrect_ShouldThrowWrongDelimiterException', () => {
        const IndiaStatecodeVariable1 = new IndiaStatecode();
        return IndiaStatecode.indiaStateCodefunction(INDIA_STATE_CODE_WRONG_DELIMITER)
        .catch(error => expect(error.message).toBe('Invalid Delimiter Exception'))
    });*/

})