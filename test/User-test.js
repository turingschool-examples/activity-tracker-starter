const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const testUserData = testData.testUserData;
const User = require('../src/User');

describe('User', () => {
  let users;

  beforeEach(() => {
    users = testUserData.map(userData => {
      const user = new User(userData);
      return user;
    });
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(users[0]).to.be.an.instanceof(User);
  })

  it('should have an id', () => {
    expect(users[0].id).to.equal(1);
  })

  it('should have a name', () => {
    expect(users[1].name).to.equal('Tashia Davis');
  })

  it('should have an address', () => {
    expect(users[2].address).to.equal('28476 Turing Dr, Denver CO 357687');
  })

  it('should have an email', () => {
    expect(users[0].email).to.equal('gonzagasucks@hotmail.com');
  })

  it('should have a stride length', () => {
    expect(users[1].strideLength).to.equal(1.2);
  })

  it('should have a daily step goal', () => {
    expect(users[2].dailyStepGoal).to.equal(8520);
  })

  it('should have some friends', () => {
    expect(users[0].friends).to.deep.equal([2, 3]);
  })

  it('should return a users first name', () => {
    expect(users[0].getFirstName()).to.equal('Cole');
    expect(users[1].getFirstName()).to.equal('Tashia');
  })

  it('should return a users formatted daily step goal', () => {
    expect(users[0].getFormattedStepGoal()).to.equal('400');
    expect(users[1].getFormattedStepGoal()).to.equal('15,000');
    expect(users[2].getFormattedStepGoal()).to.equal('8,520');
  })

})
