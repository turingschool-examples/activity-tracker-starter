class Sleep {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgSleep(id, key, sleepData) {
    let sleep = 0;
    let days = 0;
    sleepData.forEach(function(elem) {
      if (elem.userID === id) {
        sleep += elem[key];
        days++;
      }
    });
    return Math.round((sleep / days) * 100) / 100;
  }
  showSleep(id, date, key, sleepData) {
    let data;
    sleepData.forEach(function(elem) {
      if (elem.userID === id && elem.date === date) {
        data = elem[key];
      }
    });
    return data;
  }
  showAllUserSleepQual(sleepData) {
    let sleepQualTotal = 0;
    let users = 0;
    sleepData.forEach(function(elem) {
      sleepQualTotal += elem.sleepQuality;
      users++;
    });
    return Math.round((sleepQualTotal / users) * 100) / 100;
  }
  findSleepWeek(id, date, key, sleepData) {
    let week = [];
    let user = sleepData.filter(function(elem) {
      return elem.userID === id;
    });
    let userIndex = user.findIndex(function(elem) {
      return elem.date === date;
    })
    for (let i = userIndex; i < (userIndex + 7); i++) {
      week.push(user[i][key]);
    }
    return week;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
