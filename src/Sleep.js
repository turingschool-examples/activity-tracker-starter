class Sleep {
  constructor(sleepSet) {
    this.sleepSet = sleepSet
  }
  userSleepData(id) {
    return this.sleepSet.filter(dailySleep => dailySleep.userID === id);
  }
  averageAllTimeSleep(id) {
    let getUserData = this.userSleepData(id)
    let allTimeSleep = getUserData.reduce((sleep, day) =>{
      return sleep += day.sleepQuality;
    }, 0)
    return Math.round((allTimeSleep / getUserData.length) * 10) / 10
  }
  daySleep(dateSelected, id) {
    let dayData = this.sleepSet.find(day => day.date === dateSelected && day.userID === id);
    return dayData
  }
  weeklySleepProperties(dateSelected, id, property) {
    let startingDate = this.daySleep(dateSelected, id);
    let firstDay = this.sleepSet.indexOf(startingDate);
    return this.sleepSet.slice(firstDay, firstDay + 7).map(day => day[property])
  }
  averageSleepQuality(allQuality, id) {
    let dataToAverage = id ? allQuality : this.sleepSet;
    let userHolder = id ? id : null;
    let average = dataToAverage.reduce((quality, user) => {
      return quality += userHolder ? user : user.sleepQuality;
    }, 0)
    return Math.round(average / dataToAverage.length * 10) / 10;
  }
  sleepQualityAboveThree(date) {
    let qualityAboveThree = [];
    let uniqueIds = [];
    this.sleepSet.forEach(user => !uniqueIds.includes(user.userID) ? uniqueIds.push(user.userID) : null)
    uniqueIds.forEach(id => {
      let allQuality = this.weeklySleepProperties(date, id, 'sleepQuality');
      let averageQuality = this.averageSleepQuality(allQuality, id);
      averageQuality > 3 ? qualityAboveThree.push(id) : null;
    })
    return qualityAboveThree
  }
}
if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
