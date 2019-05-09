const UserRepository = require('../src/UserRepository');

class SleepRepository {
  constructor (dataFilePath) {
    this.data = require(dataFilePath);
  }

  averageSleepQualityAll() {
    var totalQualityHours = 0;
    var days = 0;
    this.data.sleepData.forEach(user => {
       user.sleepData.forEach(day => {
          totalQualityHours += day.sleepQuality;
          days++;
       })
    })
    return parseFloat((totalQualityHours/days).toFixed(1));
  }

  sleepQualityGreaterThanThreeIDs(date) {
    let averages = [], ids = [], finalIds =[];
    this.data.sleepData.forEach(userData => {
      let total = 0, days = 0, index;
      
      userData.sleepData.forEach((el, i) => {
        if(el.date === date) {index = i}
      })
      for(let i = 0; i < userData.sleepData.length; i++) {
        if(i >= index && i <= index+6) {
          total += userData.sleepData[i].sleepQuality;
          days++;        
        }
      }
      averages.push(parseFloat((total/days).toFixed(1)))
      ids.push(userData.userID)
    })
    for(let i = 0; i < averages.length; i++) {
      if(averages[i] >= 3) {finalIds.push(ids[i])}
    }
    this.sleepQualityGreaterThanThreeNames(finalIds)
    return (finalIds)
  }

  sleepQualityGreaterThanThreeNames(finalIds) {
    const userRepository = new UserRepository('../data/usersSub.js');
    return userRepository.returnNamesFromIds(finalIds)
  }
}

module.exports = SleepRepository;