const User = require('../src/user');

class Activity extends User {
  constructor (user, currentUser) {
    super(user, currentUser)
    this.currentUser = currentUser
    this.user = user
  }

  milesWalked(date) {
    let found = this.currentUser.find(el => el.date === date);
    return ((found.numSteps * this.user.strideLength) / 5280).toFixed(2)
  }

  returnAWeek(firstDate) {
    let data = [...this.currentUser]
    let index = data.findIndex(el => el.date === firstDate);
    return data.splice(index, 7);
  }

  weeklyAverageMinActive(startingDate) {
    let week = this.returnAWeek(startingDate);
    let value = week.map(el => el.minutesActive).reduce((acc, current) => acc + current, 0) / 7
    return parseFloat(value.toFixed(1))
  }

  stepGoalMet(date) {
    let found = this.currentUser.find(el => el.date === date);
    if (this.user.dailyStepGoal < found.numSteps) {
      return true
    }
      else return false
  }

  allDaysStepGoalMet() {
    var days = this.currentUser.filter(el => el.numSteps > this.user.dailyStepGoal)
    return days.map(el => el.date)
  }


}

module.exports = Activity
