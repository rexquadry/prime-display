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