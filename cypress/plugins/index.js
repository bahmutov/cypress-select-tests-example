const selectTests = require('cypress-select-tests')

const pickTests = (filename, foundTests, cypressConfig) => {
  console.log('picking tests from file', filename)

  // found tests will be names of the tests found in "filename" spec
  // it is a list of names, each name an Array of strings
  // ['suite 1', 'suite 2', ..., 'test name']
  console.log('found tests')
  console.log(foundTests)

  // let's only run tests with "does" in the title
  return foundTests.filter(fullTestName => fullTestName.join(' ').includes('does'))
}

module.exports = (on, config) => {
  on('file:preprocessor', selectTests(config, pickTests))
}
