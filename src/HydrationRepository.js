class HydrationRepo {
  constructor(allHydration) {
    this.allHydration = allHydration;
  }

  getHydrationById(id) {
    return this.allHydration.filter(hydration => hydration.userID === id);
  }

  getUserAvgDailyOzAllTime(id) {
    const userHydration = this.getHydrationById(id);
    const userOzAllTime = userHydration.reduce((totalOz, water) => {
      return totalOz + water.numOunces;
    }, 0);
    return Math.floor(userOzAllTime / userHydration.length);
  }

  getUserOzByDate(id, date) {
    const userHydration = this.getHydrationById(id);
    const ozByDate = userHydration.find(water => water.date === date);
    return ozByDate.numOunces;
  }

  getUserOzByWeek(id, date) {
    const userHydration = this.getHydrationById(id);
    const hydrationDates = userHydration.map(hydration => hydration.date);
    const indexOfDate = hydrationDates.indexOf(date);
    const hydrationByDate = userHydration.slice(indexOfDate - 6, indexOfDate + 1);
    return hydrationByDate.reduce((obj, hydration) => {
      obj[hydration.date] = hydration.numOunces;
      return obj;
    }, {})
  }

}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepo;
}
