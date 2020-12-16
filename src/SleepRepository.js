class SleepRepo {
  constructor(allSleep) {
    this.allSleep = allSleep;
  }

  getSleepById(id) {
    return this.allSleep.filter(sleep => sleep.userID === id);
  }

  getUserAvgHrsSleptAllTime(id) {
    const userSleep = this.getSleepById(id);
    const totalHrsSlept = userSleep.reduce((total, sleep) => {
      return total + sleep.hoursSlept;
    }, 0);
    return Number((totalHrsSlept / userSleep.length).toFixed(1));
  }

  getUserAvgSleepQualityAllTime(id) {
    const userSleep = this.getSleepById(id);
    const totalSleepQuality = userSleep.reduce((total, sleep) => {
      return total + sleep.sleepQuality;
    }, 0);
    return Number((totalSleepQuality / userSleep.length).toFixed(1));
  }

  getUserSleepHrsByDate(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepHoursByDate = userSleep.find(sleep => sleep.date === date);
    return sleepHoursByDate.hoursSlept;
  }

  getUserSleepQualityByDate(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepQualityByDate = userSleep.find(sleep => sleep.date === date);
    return sleepQualityByDate.sleepQuality;
  }

  getSleepHoursByWeek(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepDates = userSleep.map(sleep => sleep.date);
    const indexOfDate = sleepDates.indexOf(date);
    const sleepByDate = userSleep.slice(indexOfDate - 6, indexOfDate + 1);
    return sleepByDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep.hoursSlept;
      return obj;
    }, {})
  }

  getSleepQualityByWeek(id, date) {
    const userSleep = this.getSleepById(id);
    const sleepDates = userSleep.map(sleep => sleep.date);
    const indexOfDate = sleepDates.indexOf(date);
    const sleepByDate = userSleep.slice(indexOfDate - 6, indexOfDate + 1);
    return sleepByDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep.sleepQuality;
      return obj;
    }, {})
  }

  getAllUsersAvgSleepQualityAllTime() {
    const totalQuality = this.allSleep.reduce((total, sleep) => {
      return total + sleep.sleepQuality;
    }, 0);
    return Number((totalQuality / this.allSleep.length).toFixed(1));
  }

  getDatesOfWeek(date) {
    const allSleepDates = this.allSleep.map(sleep => sleep.date);
    const indexOfDate = allSleepDates.indexOf(date);
    const sleepForWeek = this.allSleep.slice(indexOfDate - 6, indexOfDate + 1);
    return sleepForWeek.map(sleep => sleep.date);
  }

  getUniqueIds() {
    const uniqueIds = [];
    this.allSleep.forEach(sleep => {
      if (!uniqueIds.includes(sleep.userID)) {
        uniqueIds.push(sleep.userID);
      }
    });
    return uniqueIds;
  }

  getSleepQualityOver3(date) {
    const idsWithQualityOver3 = [];
    const weekDates = this.getDatesOfWeek(date);
    const uniqueIds = this.getUniqueIds();

    uniqueIds.forEach(id => {
      const userSleep = this.getSleepById(id);
      const userQualityForWeek = [];
      userSleep.forEach(sleep => {
        weekDates.forEach(date => {
          if (sleep.date === date) {
            userQualityForWeek.push(sleep.sleepQuality);
          }
        })
      })
      const totalQuality = userQualityForWeek.reduce((total, quality) => {
        return total + quality;
      })
      if ((totalQuality / 7) > 3) {
        idsWithQualityOver3.push(id);
      }
    })

    return idsWithQualityOver3;
  }

  getSleptMostOnDate(date) {
    const ids = [];
    const sleepByDate = this.allSleep.filter(sleep => sleep.date === date);
    const hoursSleptOnDate = sleepByDate.map(sleep => sleep.hoursSlept);
    sleepByDate.forEach(sleep => {
      if (sleep.hoursSlept === Math.max(...hoursSleptOnDate)) {
        ids.push(sleep.userID);
      }
    });
    return ids;
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
