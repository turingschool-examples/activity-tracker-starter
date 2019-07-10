const chai = require('chai')
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const fakeData = require('../fakeData/fakeUsers');
const fakeActivity = require('../fakeData/fakeActivity');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activityRepository');

describe('Activity', function() {

  it('should be able to return the number of steps a user took', function() {
    const repo1 = new Activity(fakeData, fakeActivity);

    expect(repo1.dailyStepCount(1, "2019/06/15")).to.equal(3577)
  })
  it('should be able to calculate the miles a user has walked', function () {
    const repo1 = new Activity(fakeData, fakeActivity);
    const userActivity = new ActivityRepository(fakeActivity)

    expect(repo1.calculateMiles(1)).to.equal(.34)

  });

  it('should be able to return the minutes active for a user given a specific date', function() {
    const object = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);
        
    expect(repo1.getDailyMinutesActive()).to.equal(140)
    expect(repo2.getDailyMinutesActive()).to.equal(140)
  });

  it('should be able to get a users weekly average of minutes they were active', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.getWeeklyMinutesActiveAverage(1, "2019/06/15")).to.equal(171)
  });

  it('should be able to get the data for minutes a user was active for a week', function () {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.getWeeklyMinutesActive(1, "2019/06/17")).to.eql([168, 165, 275, 140, 135])
  });

  // it('should be able to show the users weekly minutes active data', function() {
  // const repo1 = new Activity(fakeData, fakeActivity);

  // expect(repo1.getWeeklyMinutesActive(1, "2019/06/16")).to.eql([])
  // })

  it('should show if a user has met their step goal on a given date', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.achieveStepGoal(1)).to.equal('step goal not met!')
    expect(repo2.achieveStepGoal(25)).to.equal('step goal met!')
  });

  it('should tell a user if they have exceeded their step goal', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.exceedStepGoal(1)).to.eql([
          "2019/06/17",
          "2019/06/20",
          "2019/06/22",
          "2019/06/23"])
    expect(repo2.exceedStepGoal(25)).to.eql(['2019/06/15'])
  });

  it('should return a users all time stair climbing record', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.findStairClimbingRecord(1)).to.eql({
      userID: 1,
      date: '2019/06/16',
      numSteps: 6637,
      minutesActive: 175,
      flightsOfStairs: 36
    })
    expect(repo2.findStairClimbingRecord(25)).to.eql({
      "userID": 25,
      "date": "2019/06/15",
      "numSteps": 5144,
      "minutesActive": 282,
      "flightsOfStairs": 16
    })
  });

  it('should return the average of all users stair climbing stats for a given date', function () {
    const repo1 = new Activity(fakeData, fakeActivity);
            
    expect(repo1.getAllUsersStairClimbingAverage("2019/06/15")).to.eql(28)
  });

  it('should return the average of all users steps for a given date', function () {
    const repo1 = new Activity(fakeData, fakeActivity);

    expect(repo1.getAllUsersStepsAverage("2019/06/15")).to.eql(7145)
  });

  it('should return the average of all users steps for a given date', function () {
    const repo1 = new Activity(fakeData, fakeActivity);

    expect(repo1.getAllUsersMinutesActiveAverage("2019/06/15")).to.eql(191)
  });

  it('should return all of the days that a user did not meet their step goal', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.daysStepGoalNotMet(1)).to.eql([{
      userID: 1,
      date: '2019/06/15',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
    },
    {
      userID: 1,
      date: '2019/06/16',
      numSteps: 6637,
      minutesActive: 175,
      flightsOfStairs: 36
    },
    {
      userID: 1,
      date: '2019/06/18',
      numSteps: 4419,
      minutesActive: 165,
      flightsOfStairs: 33
    },
    {
      userID: 1,
      date: '2019/06/19',
      numSteps: 8429,
      minutesActive: 275,
      flightsOfStairs: 2
    },
    {
      userID: 1,
      date: '2019/06/21',
      numSteps: 6760,
      minutesActive: 135,
      flightsOfStairs: 6
    }
    ])
  });

  it('should display if a user increased their number of steps 3 or more days in a row', function() {
    const repo1 = new Activity(fakeData, fakeActivity);
    const repo2 = new Activity(fakeData, fakeActivity);

    expect(repo1.increasingStepsForThreeOrMoreDays(1)).to.eql(
      [[{
          userID: 1,
          date: '2019/06/15',
          numSteps: 3577,
          minutesActive: 140,
          flightsOfStairs: 16
        },
        {
          userID: 1,
          date: '2019/06/16',
          numSteps: 6637,
          minutesActive: 175,
          flightsOfStairs: 36
        },
        {
          userID: 1,
          date: '2019/06/17',
          numSteps: 14329,
          minutesActive: 168,
          flightsOfStairs: 18
        }
      ]])
  })
});