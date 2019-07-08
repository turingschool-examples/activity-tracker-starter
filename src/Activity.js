if (typeof module !== 'undefined') {
	activityData = require('../data/activity-test-data')
	User = require('./User')
	userData = require('../data/users-test-data')
	user = new User(1)

}

class Activity{
	constructor(id){
		this.userActivity = (this.findActivityData(id));
		this.uniqueUserData = (this.findUserData(id));
         // console.log('userActivity:' ,this.userActivity)
        // console.log('uniqueUser:' ,this.uniqueUserData)
	};

	findActivityData(id){
		return activityData.filter(activity => activity.userID === id); 
    };

    findUserData(id){
        return userData.find(user => user.id === id); 
    };

    findActiveMinutesForDay(id, dateOf){
    	let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    	return dateOfActivity.minutesActive;
	};
	
	findStepsForDay(id, dateOf){
		let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    	return dateOfActivity.numSteps;
	}

	findFlightsForDay(id, dateOf){
		let dateOfActivity = this.userActivity.find(day => day.date === dateOf);
    	return dateOfActivity.flightsOfStairs;
	}

    findActiveMinutesForWeek(id, dateOf){
    	let dateIndex = this.userActivity.findIndex(day => day.date === dateOf);
        let weekOf= this.userActivity.slice(dateIndex - 6, dateIndex + 1)
    	let dailyMinutesActive =  weekOf.map(day => day.minutesActive)
    	return Math.floor(dailyMinutesActive.reduce((totalMinutes, dailyMinutes) => {
    		totalMinutes += dailyMinutes
    		return totalMinutes
    	}, 0) / 7)
    };

    compareNumStepsToStepGoal(id, dateOf){
    	let dayOfActivity = this.userActivity.find(day => day.date === dateOf)
    	if(dayOfActivity.numSteps >= this.uniqueUserData.dailyStepGoal){
    		return `Great job at meeting your Daily Step Goal!`
    	} else{
    		return 'Keep twerking!'
    	}
    };

    daysExceedStepGoal(id){
    	let stepGoal = this.uniqueUserData.dailyStepGoal
    	let allDates = this.userActivity.filter(day => day.numSteps >= stepGoal)
    	return allDates.map(day => day.date)
    };

    allTimeStairRecord(id){
    	let stairRecord = this.userActivity.sort((a,b) =>{
 			return b.flightsOfStairs - a.flightsOfStairs;
    	})
    	return stairRecord[0].flightsOfStairs
	};
	
	findMilesForDay(id, dateOf){
		let dayOfActivity = this.userActivity.find(day => day.date === dateOf);
		let daySteps = dayOfActivity.numSteps;
		let strideLength = this.uniqueUserData.strideLength;
		return Math.floor((daySteps*strideLength)/5280)
	}

    findLeastActiveDay(id){
        let sortedMins = this.userActivity.sort((a,b) => {
            return a.minutesActive - b.minutesActive});
        return `Your least active day was ${sortedMins[0].date}. What happened?` 
    }
}

if (typeof module !== 'undefined') {
	module.exports = Activity;
  }