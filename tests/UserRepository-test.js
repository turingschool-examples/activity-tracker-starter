const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

describe('UserRepository', function() {
  let user1;
  let user2;
  let user3;
  let userRepository;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    })
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    user3 = new User({
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 15000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    })
    userRepository = new UserRepository();
    userRepository.users.push(user1, user2, user3);
  })
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });
  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });
  it('should hold an array of users', function() {
    expect(userRepository.users).to.deep.equal([user1, user2, user3]);
    expect(userRepository.users.length).to.equal(3);
  });
  it('getUser should return user object when given a user id', function() {
    expect(userRepository.getUser(2)).to.equal(user2);
  })
  it('calculateAverageStepGoal should return average step goal for all users', function() {
    expect(userRepository.calculateAverageStepGoal()).to.equal(10000);
  })
  it('should have a method that calculates friends average ounces of water', function() {
    user1.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 5}
    ]
    user2.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 8}
    ]
    user3.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 4}
    ]
    expect(userRepository.calculateAverageDailyWater("2019/06/16")).to.equal(5)
  })
});