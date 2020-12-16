const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/hydration-test-data');
const testHydrationData = testData.testHydrationData;
const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepository');

describe('HydrationRepo', () => {
  let allHydration, hydrationRepo;

  beforeEach(() => {
    allHydration = testHydrationData.map(hydrationData => {
      const hydration = new Hydration(hydrationData);
      return hydration;
    });
    hydrationRepo = new HydrationRepo(allHydration);
  })

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  })

  it('should be an instance of HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo);
  })

  it('should hold all Hydration objects', () => {
    expect(hydrationRepo.allHydration[0]).to.deep.equal(allHydration[0]);
    expect(hydrationRepo.allHydration[1]).to.deep.equal(allHydration[1]);
    expect(hydrationRepo.allHydration[2]).to.deep.equal(allHydration[2]);
  })

  it('should return a users hydration data given their user ID', () => {
    function testWaterById(id) {
      return testHydrationData.filter(hydration => hydration.userID === id);
    }
    expect(hydrationRepo.getHydrationById(1)).to.deep.equal(testWaterById(1));
    expect(hydrationRepo.getHydrationById(2)).to.deep.equal(testWaterById(2));
  })

  it('should return a users avg oz consumed per day for all time', () => {
    expect(hydrationRepo.getUserAvgDailyOzAllTime(1)).to.equal(67);
    expect(hydrationRepo.getUserAvgDailyOzAllTime(2)).to.equal(49);
  })

  it('should return a users oz consumed for a specific day', () => {
    expect(hydrationRepo.getUserOzByDate(1, "2019/06/18")).to.equal(85);
    expect(hydrationRepo.getUserOzByDate(2, "2019/06/16")).to.equal(22);
  })

  it('should get a users oz drank for a given week', () => {
    expect(hydrationRepo.getUserOzByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 27,
      "2019/06/16": 75,
      "2019/06/17": 47,
      "2019/06/18": 85,
      "2019/06/19": 42,
      "2019/06/20": 87,
      "2019/06/21": 94});
  })

})
