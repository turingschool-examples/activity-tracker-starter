class Activity {
  constructor(activityData) {
    this.userID = activityData.userID;
    this.date = activityData.date;
    this.numSteps = activityData.numSteps;
    this.minutesActive = activityData.minutesActive;
    this.flightsOfStairs = activityData.flightsOfStairs;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
