class ActivityRepo {
  constructor(data) {
    this.activityData = data
  }
  
  getActivityEntry(user, date) {
    return this.activityData.find(entry => entry.date === date && entry.userID === user.id)
  }

  getUserEntries(user) {
    return this.activityData.filter(userEntry => {
      return user.id === userEntry.userID
    });
  }

  calculateMilesWalked(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    const milesWalked = (user.strideLength * activityEntry.numSteps) / 5280

    return parseFloat(milesWalked.toFixed(2))
  }

  findMinutesActive(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    return activityEntry.minutesActive
  }

  calculateAvgMinutesForWeek(user, endDate) {
    const entries = this.getUserEntries(user)
    const endingIndex = entries.map(endingEntry => {
      return endingEntry.date
    }).indexOf(endDate);
    const weekData = (entries.slice(endingIndex - 6, endingIndex + 1))
    const totalMinutes = weekData.reduce((totalMin, day) => {
      return totalMin += day.minutesActive
    }, 0)
    return parseFloat((totalMinutes / 7).toFixed(0))
  }

  findIfStepGoalMet(user, date) {
    const activityEntry = this.getActivityEntry(user, date)
    // if (user.dailyStepGoal <= activityEntry.numSteps) {
    //   return true
    // } else {
    //   return false
    // }
    return user.dailyStepGoal <= activityEntry.numSteps ? true : false
  }

  getDatesGoalWasMet(user) {
    const entries = this.getUserEntries(user)
    const datesGoalMet = entries.filter(entry => user.dailyStepGoal <= entry.numSteps)
    return datesGoalMet
  }

  getClimbingRecord(user) {
    const entries = this.getUserEntries(user)
    entries.sort((entryA, entryB) => entryB.flightsOfStairs - entryA.flightsOfStairs)
    return entries[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}