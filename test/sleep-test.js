const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const User = require('../src/User');

describe.only('Sleep' function() {
    let sleepData;
    let sleep;

  beforeEach(function () {
    sleepData = [
      {
        "userID": 1,
        "date": "2017/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2017/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2017/06/15",
        "hoursSlept": 2,
        "sleepQuality": 3
      },
      {
        "userID": 4,
        "date": "2017/06/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2018/07/15",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      {
        "userID": 2,
        "date": "2018/07/15",
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      {
        "userID": 3,
        "date": "2018/07/15",
        "hoursSlept": 2,
        "sleepQuality": 3
      },
      {
        "userID": 4,
        "date": "2018/07/23",
        "hoursSlept": 8.1,
        "sleepQuality": 3.5
      },
      {
        "userID": 1,
        "date": "2019/05/30",
        "hoursSlept": 8.9,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/05/30",
        "hoursSlept": 4.4,
        "sleepQuality": 1.6
      },
      {
        "userID": 3,
        "date": "2019/05/30",
        "hoursSlept": 4,
        "sleepQuality": 1
      },
      {
        "userID": 4,
        "date": "2019/05/30",
        "hoursSlept": 8,
        "sleepQuality": 3.4
      },
      {
        "userID": 1,
        "date": "2019/08/22",
        "hoursSlept": 10.1,
        "sleepQuality": 1.8
      },
      {
        "userID": 2,
        "date": "2019/08/22",
        "hoursSlept": 6.9,
        "sleepQuality": 1.2
      },
      {
        "userID": 3,
        "date": "2019/08/22",
        "hoursSlept": 4,
        "sleepQuality": 1
      },
      {
        "userID": 4,
        "date": "2019/06/21",
        "hoursSlept": 6.1,
        "sleepQuality": 3.5
      },
      {
        "userID": 4,
        "date": "2019/06/20",
        "hoursSlept": 4.7,
        "sleepQuality": 4
      },
      {
        "userID": 4,
        "date": "2019/06/19",
        "hoursSlept": 10.1,
        "sleepQuality": 1.3
      },
      {
        "userID": 4,
        "date": "2019/06/18",
        "hoursSlept": 7.9,
        "sleepQuality": 1.6
      },
      {
        "userID": 4,
        "date": "2019/06/17",
        "hoursSlept": 5.9,
        "sleepQuality": 1.6
      },
      {
        "userID": 4,
        "date": "2019/06/16",
        "hoursSlept": 9.6,
        "sleepQuality": 1
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "hoursSlept": 9,
        "sleepQuality": 3.1
      }];

    sleep = new Sleep(sleepData);
  })
  it('should take in a list of data', function() {
    expect(sleep.sleepData[1].userID).to.equal(1);
    expect(sleep.sleepData[3].hoursSlept).to.equal(5.4);
    expect(sleep.sleepData[6].sleepQuality).to.equal(2.6);
    expect(sleep.sleepData[7].date).to.equal('2018/07/23');
  });

  it('should find the average sleep hours per day for a user', function() {
    expect(calculateAverageSleep(3)).to.equal(3);
  });

  it('should find the average sleep quality per day for a user', function() {
    expect(calculateAverageSleepQuality(3)).to.equal(2);
  });

  it('should find the sleep hours for a user on a specified date', function() {
    expect(sleep.calculateDailySleep(2, "2019/06/15")).to.equal(7);
    expect(sleep.calculateDailySleep(4, "2019/06/21")).to.equal(6.1);
  });

  it('should find the sleep quality for a user on a specified date', function() {
    expect(sleep.calculateDailySleepQuality(2, "2019/06/15")).to.equal(3.5);
    expect(sleep.calculateDailySleepQuality(4, "2019/06/21")).to.equal(4.7);
  });

  it('should find water intake by day for its week', function() {
    const user3 = new User({id: 3,
          name: "The Rock",
          address: "1236 Awesome Street, Denver CO 80301-1697",
          email: "therock@hotmail.com",
          strideLength: 10,
          dailyStepGoal: 60000,
          friends: [1, 2, 4]
        });

        const user4 = new User({id: 4,
          name: "Rainbow Dash",
          address: "1237 Equestria Street, Denver CO 80301-1697",
          email: "rainbowD1@hotmail.com",
          strideLength: 3.8,
          dailyStepGoal: 7000,
          friends: [1, 2, 3]
        });
    const users = [user3, user4];
    const userRepo = new UserRepo(users);
    console.log(sleep.calculateWeekSleep('2019/06/18', 4, userRepo));
    expect(sleep.calculateWeekSleep('2019/06/18', 4, userRepo)[0]).to.eql('2019/06/18: 7.9');
    expect(sleep.calculateWeekSleep('2019/06/18', 4, userRepo)[6]).to.eql('2019/04/15: 36');
  })
})
