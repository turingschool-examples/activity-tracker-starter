const chai = require('chai')
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const fakeData = require('../fakeData/fakeUsers');
const fakeActivity = require('../fakeData/fakeActivity');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activityRepository');

describe('Activity', function() {


      it('should be able to calculate the miles a user has walked', function () {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
        // const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");
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
          const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
          const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");
        
          expect(repo1.getDailyMinutesActive()).to.equal(140)
          expect(repo2.getDailyMinutesActive()).to.equal(140)
      });

      it.skip('should be able to get a users weekly average of minutes they were active', function() {
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
          const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
          const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");

          expect(repo1.getWeeklyMinutesActive()).to.equal(174)
      })
})