class Hydration {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.numOunces;
  }

  calculateAverageFluidIntakeForUser = (hydrationDatas) => {
    let userOunceIntakes = [];

    hydrationDatas.filter(hydrationData => {
      if(hydrationData.userID === this.userID) {
        userOunceIntakes.push(hydrationData.numOunces)
      }
    })

    let totalOunces = userOunceIntakes.reduce((acc, ounce) => {
        acc += ounce;
        return acc;
    }, 0)

    return Math.trunc(totalOunces / userOunceIntakes.length);
  }

  calculateFluidIntakeForDay = (hydrationDatas, date) => {
    let userHydrationData = hydrationDatas.filter(hydrationData => hydrationData.userID === this.userID)
    .find(hydrationData => hydrationData.date === date);

    return userHydrationData.numOunces;
  }

  calculateTotalIntakeForWeek() {

  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
