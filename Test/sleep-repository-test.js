const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const SleepRepository = require('../src/sleep-repository');

describe("Sleep-Repository", () => {

  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepData);
  });

  it("should be a function", () => {
    expect(SleepRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository)
  });


});
