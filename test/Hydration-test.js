const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/hydration-test-data');
const testHydrationData = testData.testHydrationData;
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydrationData;

  beforeEach(() => {
    hydrationData = testHydrationData.map(hydrationObj => {
      const hydration = new Hydration(hydrationObj);
      return hydration;
    });
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {
    expect(hydrationData[0]).to.be.an.instanceof(Hydration);
  })

  it('should have an id', () => {
    expect(hydrationData[0].userID).to.equal(1);
    expect(hydrationData[10].userID).to.equal(2);
  })

  it('should have a date', () => {
    expect(hydrationData[0].date).to.equal("2019/06/15");
    expect(hydrationData[10].date).to.equal("2019/06/17");
  })

  it('should have a number of oz', () => {
    expect(hydrationData[0].numOunces).to.equal(27);
    expect(hydrationData[10].numOunces).to.equal(67);
  })

})
