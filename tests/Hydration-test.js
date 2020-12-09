const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
// const User = require('../src/User');

describe('Hydration', () => {
  let hydration1, hydration2, hydration3,
    hydration4, hydration5, hydration6,
    hydration7, hydration8, hydration9,
    hydration10, hydration11;
  let hydrations stats = [];
  // let user1, user2;

  beforeEach(() => {
    hydration1 = new Hydration({
      "userID": 2,
      "date": "2019/04/15",
      "numOunces": 25
    });

    hydration2 = new Hydration({
      "userID": 2,
      "date": "2019/04/16",
      "numOunces": 40
    });

    hydration3 = new Hydration({
    "userID": 2,
    "date": "2019/04/17",
    "numOunces": 45
    });

    hydration4 = new Hydration({
    "userID": 2,
    "date": "2019/04/18",
    "numOunces": 23
    });

    hydration5 = new Hydration({
    "userID": 2,
    "date": "2019/04/19",
    "numOunces": 80
    });

    hydration6 = new Hydration({
    "userID": 2,
    "date": "2019/04/20",
    "numOunces": 49
    });

    hydration7 = new Hydration({
    "userID": 2,
    "date": "2019/04/21",
    "numOunces": 88
    });

    hydration8 = new Hydration({
    "userID": 2,
    "date": "2019/04/22",
    "numOunces": 75
    });

    hydration9 = new Hydration({
    "userID": 2,
    "date": "2019/04/23",
    "numOunces": 29
    });

    hydration10 = new Hydration({
      "userID": 15,
      "date": "2019/02/25",
      "numOunces": 0
    });

    hydration11 = new Hydration({
      "userID": 20,
      "date": "2019/12/02",
      "numOunces": 100
    });
    hydrationStats = [
      hydration1, hydration2, hydration3, hydration4, hydration5,
      hydration6, hydration7, hydration8, hydration9
    ];
  })

  it('should have a userID property', () => {
    expect(hydration1.userID).to.equal(2);
    expect(hydration10.userID).to.equal(15);
    expect(hydration11.userID).to.equal(20);
  })
  it('should include a date as a property', () => {
    expect(hydration1.date).to.equal("2019/04/15");
    expect(hydration10.date).to.equal("2019/02/25");
    expect(hydration11.date).to.equal("2019/12/02");
  })
  it('should have a property that states the number of ounces of water consumed', () => {
    expect(hydration1.numOunces).to.equal(25);
    expect(hydration10.numOunces).to.equal(0);
    expect(hydration11.numOunces).to.equal(100);
  })
  it('should be able to calculate the average fluid ounces consumed per day for all time for the given userID', () => {
    //.filter userID
    //.reduce add all numbers and divide by the length to get the average
  })
  it('should be able to calculate how many fluid ounces were consumed on a given day', () => {
    //.find date and return numOunces
  })
  it('should be able to calculate how many fluid ounces were consumed each day over the course of 7days and return the amount', () => {
    //.find date and add 1 to each day? to create a new array? or sort?
    //add numOunces and divide by 7
  })
})
