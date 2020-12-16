const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/activity-test-data');
const testActivityData = testData.testActivityData;
const Activity = require('../src/Activity');

describe('Activity', () => {
  let allActivity;

  beforeEach(() => {
    allActivity = testActivityData.map(activityData => {
      const activity = new Activity(activityData);
      return activity;
    });
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('should be an instance of Activity', () => {
    expect(allActivity[0]).to.be.an.instanceof(Activity);
  })

  it('should have an id', () => {
    expect(allActivity[0].userID).to.equal(1);
    expect(allActivity[10].userID).to.equal(2);
  })

  it('should have a date', () => {
    expect(allActivity[0].date).to.equal("2019/06/15");
    expect(allActivity[10].date).to.equal("2019/06/17");
  })

  it('should have number of steps', () => {
    expect(allActivity[0].numSteps).to.equal(3577);
    expect(allActivity[10].numSteps).to.equal(7864);
  })

  it('should have minutes active', () => {
    expect(allActivity[0].minutesActive).to.equal(140);
    expect(allActivity[10].minutesActive).to.equal(151);
  })

  it('should have flights of stairs', () => {
    expect(allActivity[0].flightsOfStairs).to.equal(16);
    expect(allActivity[10].flightsOfStairs).to.equal(28);
  })

})
