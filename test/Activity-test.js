const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const activitySub = require('../data/activitySub');

describe("Activity", function() {
    it("should be a function", function() {
      expect(Activity).to.be.a("function");
    });

    it("should be an instance of Activity", function() {
      const activity = new Activity();
      expect(activity).to.be.an.instanceof(Activity);
    });

    it("return the miles a user has walked", function() {
        const activity = new Activity(1);
        expect(activity.returnMilesWalked("2019/06/15")).to.equal(2.91);
      });
});