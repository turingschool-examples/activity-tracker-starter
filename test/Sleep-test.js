const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/sleep-test-data');
const testSleepData = testData.testSleepData;
const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let allSleep;

  beforeEach(() => {
    allSleep = testSleepData.map(sleepData => {
      const sleep = new Sleep(sleepData);
      return sleep;
    });
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {
    expect(allSleep[0]).to.be.an.instanceof(Sleep);
  })

  it('should have an id', () => {
    expect(allSleep[0].userID).to.equal(1);
    expect(allSleep[10].userID).to.equal(2);
  })

  it('should have a date', () => {
    expect(allSleep[0].date).to.equal("2019/06/15");
    expect(allSleep[10].date).to.equal("2019/06/17");
  })

  it('should have hours slept', () => {
    expect(allSleep[0].hoursSlept).to.equal(8);
    expect(allSleep[10].hoursSlept).to.equal(4.7);
  })

  it('should have sleep quality', () => {
    expect(allSleep[0].sleepQuality).to.equal(4.4);
    expect(allSleep[10].sleepQuality).to.equal(4.3);
  })

})
