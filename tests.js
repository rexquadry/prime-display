var rewire = require('rewire');
var chai = require('chai');
var should = chai.should();


var app = rewire('./index.js');

testIsPrime = app.__get__('isPrime');

describe('Test isPrime function', function() {

  it('should return false', function(done) {
      const test = testIsPrime(6);
      test.should.be.false;
      done();
  });

  it('should return false', function(done) {
      const test = testIsPrime("6");
      test.should.be.false;
      done();
  });

  it('should return false', function(done) {
      const test = testIsPrime({});
      test.should.be.false;
      done();
  });

  it('should return true', function(done) {
      const test = testIsPrime(19);
      test.should.be.true;
      done();
  });
});

testGeneratePrimeNumbers = app.__get__('generatePrimeNumbers');
describe('Testing prime number generator', function() {
    it('should be empty', function(done) {
      const test = testGeneratePrimeNumbers(0);
      test.length.should.equal(0);
      done();
    });

    it('should have length of 10', function(done) {
        const test = testGeneratePrimeNumbers(10);
        console.log(test)
        test.length.should.equal(10);
        done();
    });

    it('should include 2', function(done) {
        const test = testGeneratePrimeNumbers(10);
        test.should.include(2);
        done();
    });

    it('should not include 9', function(done) {
        const test = testGeneratePrimeNumbers(20);
        console.log(test);
        test.should.not.include(9);
        done();
    });

    it('should not include 9', function(done) {
        const test = testGeneratePrimeNumbers(10);
        test.should.not.include(9);
        done();
    });
  
    // We can have more its here
  });