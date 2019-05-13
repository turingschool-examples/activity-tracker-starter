if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	sampleSleepData = require('../data/sleep');
};


class SleepRepository {
	constructor(dataFilePath) {
		this.userSleepData = this.findFilePath(dataFilePath);
		console.log(this.userSleepData)
	}

	findFilePath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return sleepData;
    } 
  }

  findAvgUserSleep() {
  	const avgSleep = this.userSleepData.reduce((a, b) => a += b.sleepQuality, 0);
  	console.log(avgSleep)
  }
  
};
//Sleep Repo

//Find user by Id and set a property to call that method in constructor

//Find average sleep quality(userSleepData)
    //Access object keys to target sleepData
    //Find sum of sleepQuality through all users (using reduce or map)
    //Calculate average
    //Return number

//Find good sleepers(userSleepData, date)
    //Access object keys to target sleepData
    //Use slice method to set date range
    //Map through users and set conditional for sleepQuality > 3

//Find Top Sleeper(userSleepData, date)
    //Access object keys to target sleepData
    //Filter specific date
    //const specificDate = sleepData.filter(item => item.date === date)
    
    //Find most hours amongst sleepers(date)
    //const mostHours = Math.max(specificDate.hoursslept)
    //
    //Create new array of users with most sleep
    //const topSleepers =specificDate.filter(item => item.hoursSlept === mostHours)

    //** proposing a method to access object keys and target sleepData to be used within each of these methods **//







if(typeof module !== 'undefined') {
module.exports = SleepRepository;
}