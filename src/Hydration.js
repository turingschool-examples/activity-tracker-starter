let hydrData = {}
if (typeof module !== 'undefined') {
  hydrUser = require('../data/users-test-data')
  hydrationData = require('../data/hydration-test-data')
  User = require('./User')
  user = new User(1)
} else {
  hydrUser = userData;
  hydrData = hydrationData;
}
class Hydration {
  constructor() {
    this.data = (this.findHydrationData(user.user.id));
  }

  findHydrationData(ident) {
    return hydrationData.find(ele => ele.userID === ident)
  }

  averageOuncesPerDay() {
    let ounces = this.data.hydrationData
    let average = ounces.map(ele => ele.numOunces).reduce((acc, value) => {
      acc += value / ounces.length
      return acc
    }, 0)
    return Math.floor(average)
  }

  amountHydratedByDay(day) {
    let userOunce = this.data.hydrationData;
    return userOunce.filter(ounces => ounces.date === day).map(oz => oz.numOunces).shift()
  }

  waterForWeek(startDate) {
    let week = this.data.hydrationData;
    let firstDayIndex = week.findIndex(ele => ele.date === startDate) 
    return week.slice(firstDayIndex, 7)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}