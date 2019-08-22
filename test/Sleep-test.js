const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const mockSleep = require('../mock-data/mock-sleep');
const mockSleepUser1 = require('../mock-data/mock-sleep-user1')[0];
const mockSleepUserEachDayGivenWeek = require('../mock-data/mock-sleep-user1')[1];



let sleep;


describe('Sleep', () => {

  beforeEach( () => {
    sleep = new Sleep(mockSleep, 1);
    sleep.findCurrentUserData();
  });

  it('should return true', () => {
    expect(true).to.equal(true);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a parameter to take in sleep data', () => {
    expect(sleep.allSleepData).to.eql(mockSleep);
  });

  it('should have a parameter to take in current User id', () => {
    expect(sleep.currentUserId).to.eql(1);
  });

  describe('findCurrentUserData', () => {
    it('should be able to find the current user data', () => {
      expect(sleep.findCurrentUserData()).to.eql(mockSleepUser1);
    });
  });
    

  describe('findUserAverageHoursSleptEachDayById', () => {
    it('should be able to find the average hours slept each day by id', () => {
      expect(sleep.findUserAverageHoursSleptEachDayById()).to.equal(7.92);
    });
  });

  describe('findHoursSleptByDate', () => {
    it('should be able to find the number of hours a user slept based on date', () => {
      expect(sleep.findHoursSleptByDate("2019/06/16")).to.equal(4.1);
    });
  });

  describe('findSleepQualityByDate', () => {
    it('should be able to find the quality of sleep based on date', () => {
      expect(sleep.findSleepQualityByDate("2019/06/16")).to.equal(3.8);
    });
  });

  describe('findHoursSleptEachDayOverWeek', () => {
    it('should be able to find the the hours of sleep each day over a given week', () => {
      expect(sleep.findHoursSleptEachDayOverWeek("2019/06/15", "2019/06/21")).to.eql(mockSleepUserEachDayGivenWeek)
    });
  });


  // describe('fetchQualityOfSleepOverWeek', () => {
  //     it('should be able to find the quality of sleep over a given week', () => {
  //     expect;
  //     });
  // });

  // describe('fetchAverageQualityOfSleepAllUsers', () => {
  //     it('should be able to find the average quality of sleep for all users', () => {
  //     expect;
  //     });
  // });

  // describe('fetchQualityOfSleepBasedOnDate', () => {
  //     it('should be able to find the quality of sleep based on date', () => {
  //     expect;
  //     });
  // });

  // describe('fetchAllUsersOverThreeSleepQualityForWeek', () => {
  //     it('should be able to find all user/s who average a sleep quality greater than 3 for a given week', () => {
  //     expect;
  //     });
  // });

  // describe('fetchUsersSleptMostHoursBasedOnDate', () => {
  //      it('should be able to find the user/s who slept the most number of hours based on a date', () => {
  //     expect;
  //      });
  //   });

});