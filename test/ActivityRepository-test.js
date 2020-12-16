const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const testUserData = testData.testUserData;
const activityTestData = require('../data/activity-test-data');
const testActivityData = activityTestData.testActivityData;
const Activity = require('../src/Activity');
const ActivityRepo = require('../src/ActivityRepository');
const User = require('../src/User');

describe('ActivityRepository', () => {
  let user1, user2, allActivity, activityRepo;

  beforeEach(() => {
    user1 = new User(testUserData[0]);
    user2 = new User(testUserData[1]);
    allActivity = testActivityData.map(activityData => {
      const activity = new Activity(activityData);
      return activity;
    });
    activityRepo = new ActivityRepo(allActivity);
  })

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  })

  it('should be an instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  })

  it('should hold all Activity objects', () => {
    expect(activityRepo.allActivity[0]).to.deep.equal(allActivity[0]);
    expect(activityRepo.allActivity[1]).to.deep.equal(allActivity[1]);
    expect(activityRepo.allActivity[2]).to.deep.equal(allActivity[2]);
  })

  it('should get a users activity data given their user ID', () => {
    function getTestDataById(id) {
      return testActivityData.filter(activity => activity.userID === id);
    }
    expect(activityRepo.getActivitiesById(1)).to.deep.equal(getTestDataById(1));
    expect(activityRepo.getActivitiesById(2)).to.deep.equal(getTestDataById(2));
  })

  it('should get all activity data for a given date', () => {
    function getTestDataById(date) {
      return testActivityData.filter(activity => activity.date === date);
    }
    expect(activityRepo.getActivitiesByDate("2019/06/15")).to.deep.equal(getTestDataById("2019/06/15"));
    expect(activityRepo.getActivitiesByDate("2019/06/16")).to.deep.equal(getTestDataById("2019/06/16"));
  })

  it('should get a users activity data by date given their user ID', () => {
    function getTestData(id, date) {
      const allUserActivity = testActivityData.filter(activity => {
        return activity.userID === id;
      });
      return allUserActivity.find(activity => activity.date === date);
    }

    expect(activityRepo.getActivityByIdAndDate(user1, "2019/06/15")).to.deep.equal(getTestData(1, "2019/06/15"));
    expect(activityRepo.getActivityByIdAndDate(user2, "2019/06/16")).to.deep.equal(getTestData(2, "2019/06/16"));
  })

  it('should get a users miles walked on a given date', () => {
    expect(activityRepo.getMilesWalked(user1, "2019/06/15")).to.equal(3.9);
    expect(activityRepo.getMilesWalked(user2, "2019/06/16")).to.equal(1.1);
  })

  it('should get a users steps taken on a given date', () => {
    expect(activityRepo.getStepsTaken(user1, "2019/06/15")).to.equal('3,577');
    expect(activityRepo.getStepsTaken(user2, "2019/06/16")).to.equal('4,887');
  })

  it('should get a users minutes active on a given date', () => {
    expect(activityRepo.getMinsActive(user1, "2019/06/15")).to.equal(140);
    expect(activityRepo.getMinsActive(user2, "2019/06/16")).to.equal(112);
  })

  it('should get a users flights of stairs on a given date', () => {
    expect(activityRepo.getStairs(user1, "2019/06/15")).to.equal(16);
    expect(activityRepo.getStairs(user2, "2019/06/16")).to.equal(19);
  })

  it('should get a users activity data for a given week', () => {
    expect(activityRepo.getActivityDataByWeek(1, "2019/06/21")).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    }
    ]);

    expect(activityRepo.getActivityDataByWeek(2, "2019/06/22")).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/16",
      "numSteps": 4887,
      "minutesActive": 112,
      "flightsOfStairs": 19
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numSteps": 7864,
      "minutesActive": 151,
      "flightsOfStairs": 28
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numSteps": 6885,
      "minutesActive": 98,
      "flightsOfStairs": 40
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numSteps": 15135,
      "minutesActive": 220,
      "flightsOfStairs": 21
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numSteps": 10001,
      "minutesActive": 101,
      "flightsOfStairs": 10
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numSteps": 7975,
      "minutesActive": 99,
      "flightsOfStairs": 3
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "numSteps": 18546,
      "minutesActive": 287,
      "flightsOfStairs": 40
    }
    ]);
  })

  it('should get average daily active minutes over a week', () => {
    expect(activityRepo.getAvgMinsActiveByWeek(1, "2019/06/21")).to.equal(159);
    expect(activityRepo.getAvgMinsActiveByWeek(2, "2019/06/22")).to.equal(153);
  })

  it('should say if a user met their step goal on date', () => {
    expect(activityRepo.getStepGoalAchieved(user1, "2019/06/15")).to.equal('Congrats! You reached your step goal for today.');
    expect(activityRepo.getStepGoalAchieved(user2, "2019/06/16")).to.equal('Only 10,113 steps left for you to reach your daily step goal.');
  })

  it('should get all days where step goal was exceeded', () => {
    expect(activityRepo.findDatesExceededStepGoal(user1)).to.deep.equal([
      "2019/06/15",
      "2019/06/16",
      "2019/06/17",
      "2019/06/18",
      "2019/06/19",
      "2019/06/20",
      "2019/06/21",
      "2019/06/22"
    ]);
    expect(activityRepo.findDatesExceededStepGoal(user2)).to.deep.equal([
      "2019/06/19",
      "2019/06/22"
    ]);
  })

  it('should get user record for flights of stairs climbed', () => {
    expect(activityRepo.findFlightsOfStairsRecord(1)).to.equal(33);
    expect(activityRepo.findFlightsOfStairsRecord(2)).to.equal(40);
  })

  it('should get a users daily steps taken for a given week', () => {
    expect(activityRepo.getStepsTakenByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 3577,
      "2019/06/16": 4294,
      "2019/06/17": 7402,
      "2019/06/18": 3486,
      "2019/06/19": 11374,
      "2019/06/20": 14810,
      "2019/06/21": 2634});
  })

  it('should get a users daily minutes active for a given week', () => {
    expect(activityRepo.getMinsActiveByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 140,
      "2019/06/16": 138,
      "2019/06/17": 116,
      "2019/06/18": 114,
      "2019/06/19": 213,
      "2019/06/20": 287,
      "2019/06/21": 107});
  })

  it('should get a users daily flights climbed for a given week', () => {
    expect(activityRepo.getFlightsClimbedByWeek(1, "2019/06/21")).to.deep.equal({
      "2019/06/15": 16,
      "2019/06/16": 10,
      "2019/06/17": 33,
      "2019/06/18": 32,
      "2019/06/19": 13,
      "2019/06/20": 18,
      "2019/06/21": 5});
  })

  it('should get all user avg steps for a given date', () => {
    expect(activityRepo.getAllUsersAvgStepsByDate("2019/06/15")).to.equal('4,082');
    expect(activityRepo.getAllUsersAvgStepsByDate("2019/06/16")).to.equal('4,591');
  })

  it('should get all user avg mins for a given date', () => {
    expect(activityRepo.getAllUsersAvgMinsByDate("2019/06/15")).to.equal(152);
    expect(activityRepo.getAllUsersAvgMinsByDate("2019/06/16")).to.equal(125);
  })

  it('should get all user avg stairs for a given date', () => {
    expect(activityRepo.getAllUsersAvgStairsByDate("2019/06/15")).to.equal(17);
    expect(activityRepo.getAllUsersAvgStairsByDate("2019/06/16")).to.equal(15);
  })

})
