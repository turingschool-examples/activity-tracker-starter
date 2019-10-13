class ActivityUser {
  constructor(userActivityData){
    this.activityData = userActivityData;
  }

  getNumStepsByDay(date) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    return userDateData.numSteps;
  }

  calcMilesByDay(date, userStrideLength) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    let feetWalked = userDateData.numSteps * userStrideLength;
    return Math.round(feetWalked / 5280);
  }

  getMinutesActiveByDay(date) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    return userDateData.minutesActive;
  }

getFlightsClimbedByDay(date) {
  let userDateData = this.activityData.find(activityData => {
    return activityData.date === date;
  })
  return userDateData.flightsOfStairs;
}

  calcAvgMinutesByWeek(date) {
    let dataDate = this.activityData.map(data => data.date);
    let dateIndex = dataDate.lastIndexOf(date);
    let weekData = this.activityData.slice(dateIndex - 7, dateIndex + 1);
    let sum =  weekData.reduce((acc, day) => {
      acc += day.minutesActive;
      return acc;
    },0)
    return Math.round(sum / 8);
  }

  evalReachStepGoal(date, userStepGoal) {
    let userDateData = this.activityData.find(activityData => {
      return activityData.date === date;
    })
    if (userDateData.numSteps >= userStepGoal) {
      return true;
    } else {
      return false;
    }
  }

  getDaysBeatStepGoal(userStepGoal) {
    let exceededGoal = this.activityData.filter(day => day.numSteps > userStepGoal)
    let datesExceededGoal = exceededGoal.map(day => day.date)
    return datesExceededGoal;
  }

  getStairClimbingRecord() {
    let stairRecord = this.activityData.reduce((acc, day) => {
      if (day.flightsOfStairs > acc) {
        acc = day.flightsOfStairs;
      }
      return acc;
    },0)
    return stairRecord;
  }

  getMinutesActiveRecord() {
    let minutesRecord = this.activityData.reduce((acc, day) => {
      if (day.minutesActive > acc) {
        acc = day.minutesActive;
      }
      return acc;
    },0)
    return minutesRecord;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}