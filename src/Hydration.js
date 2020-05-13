class Hydration {
  constructor(hydrationData, user) {
    this.hydrationData = hydrationData;
    this.currentUser = user;
  }

  getUserHydrationData() {
    return this.hydrationData.filter(hydration => hydration.userID === this.currentUser.id)
  }

  getAverageDailyOunces() {
    let userHydroData = this.getUserHydrationData()
    let userAverage = userHydroData.reduce((acc, userData) => {
      acc += userData.numOunces
      return acc
    }, 0)
    return Math.round(userAverage / userHydroData.length)
  }

  getOuncesForSpecificDay(date) {

  }

  getWeekOfFluidOunces(date) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
