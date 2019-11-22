// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

const validRetVals = ['fizz', 'buzz', 'fizz-buzz'];

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('where input is a MOD of 3, 5, or 15, it should report back fizz, buzz, or fizz-buzz, respectively', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {testCase: 6, expected: 'fizz'},
      {testCase: 50, expected: 'buzz'},
      {testCase: 60, expected: 'fizz-buzz'}
    ];
    // for each test case, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.testCase);
      expect(validRetVals).to.include(answer);
    });
  });

  // test the abnormal case
  it('where input is NOT a MOD of 3, 5, or 15, it should report back the input value itself', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const abnormalCases = [ 7, 28, 16, 61 ];

    // for each test case, `fizzBuzzer` should
    // produce the expected value
    abnormalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(input).to.equal(answer);
    });
  });


  it('should raise error if arg is not a number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [ 'a', '1', false ];
      
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});