const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/sleep-test-data');
const testSleepData = testData.testSleepData;
const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepository');

describe('SleepRepo', () => {
  let allSleep, sleepRepo;

  beforeEach(() => {
    allSleep = testSleepData.map(sleepData => {
      const sleep = new Sleep(sleepData);
      return sleep;
    });
    sleepRepo = new SleepRepo(allSleep);
  })

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  })

  it('should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  })

  it('should hold all Sleep objects', () => {
    expect(sleepRepo.allSleep[0]).to.deep.equal(allSleep[0]);
    expect(sleepRepo.allSleep[1]).to.deep.equal(allSleep[1]);
    expect(sleepRepo.allSleep[2]).to.deep.equal(allSleep[2]);
  })

  it('should get a users sleep data given their user ID', () => {
    function getSleepTestData(id) {
      return testSleepData.filter(sleep => sleep.userID === id);
    }
    expect(sleepRepo.getSleepById(1)).to.deep.equal(getSleepTestData(1));
    expect(sleepRepo.getSleepById(2)).to.deep.equal(getSleepTestData(2));
  })

  it('should get a users avg number of hours slept per day', () => {
    expect(sleepRepo.getUserAvgHrsSleptAllTime(1)).to.equal(7.9);
    expect(sleepRepo.getUserAvgHrsSleptAllTime(2)).to.deep.equal(6.4);
  })

  it('should get a users avg sleep quality per day over all time', () => {
    expect(sleepRepo.getUserAvgSleepQualityAllTime(1)).to.equal(3.5);
    expect(sleepRepo.getUserAvgSleepQualityAllTime(2)).to.equal(2.6);
  })

  it('should get a users hours slept for a given day', () => {
    expect(sleepRepo.getUserSleepHrsByDate(1, "2019/06/18")).to.equal(5);
    expect(sleepRepo.getUserSleepHrsByDate(2, "2019/06/16")).to.equal(5.2);
  })

  it('should get a users sleep quality for a given day', () => {
    expect(sleepRepo.getUserSleepQualityByDate(1, "2019/06/18")).to.equal(1.6);
    expect(sleepRepo.getUserSleepQualityByDate(2, "2019/06/16")).to.equal(2);
  })

  it('should get a users sleep hours for a given week', () => {
    expect(sleepRepo.getSleepHoursByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 8,
      "2019/06/16": 7,
      "2019/06/17": 6,
      "2019/06/18": 5,
      "2019/06/19": 9,
      "2019/06/20": 10,
      "2019/06/21": 9.5});
  })

  it('should get a users sleep quality for a given week', () => {
    expect(sleepRepo.getSleepQualityByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 4.4,
      "2019/06/16": 3.2,
      "2019/06/17": 3,
      "2019/06/18": 1.6,
      "2019/06/19": 3.2,
      "2019/06/20": 4.9,
      "2019/06/21": 3.3});
  })

  it('should get the avg sleep quality for all users', () => {
    expect(sleepRepo.getAllUsersAvgSleepQualityAllTime()).to.equal(3.0);
  })

  it('should return a week of dates given an initial date', () => {
    expect(sleepRepo.getDatesOfWeek("2019/06/21")).to.deep.equal([
      '2019/06/15',
      '2019/06/16',
      '2019/06/17',
      '2019/06/18',
      '2019/06/19',
      '2019/06/20',
      '2019/06/21'
    ]);
    expect(sleepRepo.getDatesOfWeek("2019/06/22")).to.deep.equal([
      '2019/06/16',
      '2019/06/17',
      '2019/06/18',
      '2019/06/19',
      '2019/06/20',
      '2019/06/21',
      '2019/06/22'
    ]);
  })

  it('should return an array of all unique ids', () => {
    expect(sleepRepo.getUniqueIds()).to.deep.equal([1, 2]);
  })

  it('should find users who avg sleep quality > 3 for a week', () => {
    expect(sleepRepo.getSleepQualityOver3("2019/06/21")).to.deep.equal([1]);
    expect(sleepRepo.getSleepQualityOver3("2019/06/22")).to.deep.equal([1]);
  })

  it('should find users who slept the most on given day', () => {
    expect(sleepRepo.getSleptMostOnDate("2019/06/19")).to.deep.equal([1]);
    expect(sleepRepo.getSleptMostOnDate("2019/06/15")).to.deep.equal([1, 2]);
  })
})
