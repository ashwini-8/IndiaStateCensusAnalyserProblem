const { test, expect } = require('@jest/globals')
const CensusAnalyser = require('../main/CensusAnalyser')
const INDIA_STATE_CENSUS_CSV = "C:\\Users\\ashwi\\Desktop\\Bridgelabz\\JavaScript\\Assignments\\IndiaStateCensusAnalyserProblem\\main\\IndiaStateCensusData.csv"

describe('testsForLoadIndiaStateCensus_CSV', () => {
    test('givenStateCensusFile_EnsureNoOfRecordsMatches_WithTheFile', () => {
        const censusAnalyzer = new CensusAnalyzer(INDIA_STATE_CENSUS_CSV);
        return censusAnalyser.indiaStateAnalyser(INDIA_STATE_CENSUS_CSV).then(data =>expect(data.length).toBe(29))
    });
}); 