const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const testUserData = testData.testUserData;
const User = require('../src/User');
const UserRepo = require('../src/UserRepository');

describe('UserRepo', () => {
  let users, userRepo;

  beforeEach(() => {
    users = testUserData.map(userData => {
      const user = new User(userData);
      return user;
    });
    userRepo = new UserRepo(users);
  })

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  })

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  })

  it('should hold all User objects', () => {
    expect(userRepo.users[0]).to.deep.equal(users[0]);
    expect(userRepo.users[1]).to.deep.equal(users[1]);
    expect(userRepo.users[2]).to.deep.equal(users[2]);
  })

  it('should return a users data given their user ID', () => {
    expect(userRepo.getUserData(1)).to.deep.equal({
      id: 1,
      name: "Cole Fiscus",
      address: "7362 Gonzaga Blvd, Spokane WA 19982",
      email: "gonzagasucks@hotmail.com",
      strideLength: 5.8,
      dailyStepGoal: 400,
      friends: [2, 3]
    });
  })

  it('should calculate the average step goal amongst all users', () => {
    expect(userRepo.getAllUserAvgStepGoal()).to.equal('7,973');
  })

  it('should return a users friend names', () => {
    expect(userRepo.getUserFriendNames(1)).to.equal('Tashia Davis <br> Kayla Skannah');
    expect(userRepo.getUserFriendNames(2)).to.equal('Cole Fiscus <br> Kayla Skannah');
  })

})
