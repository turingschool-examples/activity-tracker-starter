const greeting = document.querySelector('.greeting')
const users = document.querySelector('.users')
const hydration = document.querySelector('.hydration')
const sleep = document.querySelector('.sleep')
const activity = document.querySelector('.activity')
var userRepo = new UserRepository(userData);
var todaysDate = '2019/09/22'

function makeUser() {
  const randomUser = Math.floor(Math.random() * userData.length)
  const user = new User(userData[randomUser])
  displayUserInfo(user)
  makeHydration(user)
  makeSleep(user)
  makeActivity(user)
}

function showInfoCard(user) {
  users.innerHTML = `<section class="user-info">
                     <p class="welcome">Welcome Back ${user.name.split(' ')[0]}!</p>
                     <p>Address: ${user.address}</p>
                     <p>Email: ${user.email}</p>
                     <p>Stride Length: ${user.strideLength}</p>
                     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
                     <section class='friends-names'>Your friends:</section>
                     <p>ID: ${user.id}</p>
                     </section>
                     <section class='step-goal'>
                     </section>
                     `
}


function createFriendsList(user) {
  const friendsNames = document.querySelector('.friends-names')
  const friendsList = user.userFriends.map(friends => userRepo.getUserByID(friends))
  friendsList.forEach(friend => friendsNames.insertAdjacentHTML('beforeEnd', `<p>${friend.name.split(' ')[0]}</p>`))
}

function createStepGoal(user) {
  const stepGoal = document.querySelector('.step-goal')
  stepGoal.innerHTML =
  `<p>${user.getFirstName()}'s goal is  ${user.dailyStepGoal} steps per day, and the average is  ${userRepo.getAverageStepGoal()} steps per day.
  <p class="ahead-or-behind"></p>`
}

function compareStepGoal(user) {
  const difference = userRepo.getAverageStepGoal() - user.dailyStepGoal
  const absoluteValue = Math.abs(difference)
  const aheadOrBehind = document.querySelector('.ahead-or-behind')
  difference > 0 ?  aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps greater than the average!` : aheadOrBehind.innerText = `Your goal is ${absoluteValue} steps less than the average!`
}

function displayUserInfo(user) {
  showInfoCard(user)
  createFriendsList(user)
  createStepGoal(user)
  compareStepGoal(user)
}

function makeHydration(user) {
  const newHydration = new Hydration(hydrationData, user)
  showHydrationCard(newHydration)
}

function showHydrationCard(newHydration) {
  let weeksHydroData = newHydration.getWeekOfHydroData(todaysDate)
  hydration.innerHTML = `
       <section class="hydration-data"><p>Hydration Average: ${newHydration.getAverageDailyOunces()} oz</p></section>
       <section class="todays-hydration"><p>Todays Hydration: ${newHydration.getOuncesForSpecificDay(todaysDate)} oz</p></section>
       <section class="weekly-hydration">
       <p class="box-text">Yesterday's Hydration: ${weeksHydroData[1].numOunces} oz</p>
       <p class="box-text">${weeksHydroData[2].date}: ${weeksHydroData[2].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[3].date}: ${weeksHydroData[3].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[4].date}: ${weeksHydroData[4].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[5].date}: ${weeksHydroData[5].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[6].date}: ${weeksHydroData[6].numOunces}oz</p>
       <p class="box-text">${weeksHydroData[7].date}: ${weeksHydroData[7].numOunces}oz</p>
       </section>
       `
}

function makeSleep(user) {
  let newSleep = new Sleep(sleepData, user)
  showSleepCard(newSleep)
}

function showSleepCard(newSleep) {
  let weeksSleepData = newSleep.getOneUserWeekOfSleepData(todaysDate)
  sleep.innerHTML = `
  <section class="sleep-hours"><p>Hours Slept Average: ${newSleep.getAverageDailySleep()} hours</p><p>Sleep Quality Average: ${newSleep.getAverageSleepQuality()}</p></section>
  <section class="sleep-quality"><p>Todays Hours Slept: ${newSleep.getSleepForSpecificDay(todaysDate)}</p><p>Todays Sleep Quality: ${newSleep.getQualityForSpecificDay(todaysDate)}</p></section>
  <section class="weekly-sleep">
  <p class="box-text">Yesterday's Sleep: Hours Slept: ${weeksSleepData[1].hoursSlept} Sleep Quality ${weeksSleepData[0].sleepQuality}</p>
  <p class="box-text">${weeksSleepData[2].date}: Hours Slept: ${weeksSleepData[2].hoursSlept} Sleep Quality ${weeksSleepData[1].sleepQuality}
  <p class="box-text">${weeksSleepData[3].date}: Hours Slept: ${weeksSleepData[3].hoursSlept} Sleep Quality ${weeksSleepData[2].sleepQuality}
  <p class="box-text">${weeksSleepData[4].date}: Hours Slept: ${weeksSleepData[4].hoursSlept} Sleep Quality ${weeksSleepData[3].sleepQuality}
  <p class="box-text">${weeksSleepData[5].date}: Hours Slept: ${weeksSleepData[5].hoursSlept} Sleep Quality ${weeksSleepData[4].sleepQuality}
  <p class="box-text">${weeksSleepData[6].date}: Hours Slept: ${weeksSleepData[6].hoursSlept} Sleep Quality ${weeksSleepData[5].sleepQuality}
  <p class="box-text">${weeksSleepData[7].date}: Hours Slept: ${weeksSleepData[7].hoursSlept} Sleep Quality ${weeksSleepData[6].sleepQuality}
  </section>
  `
}

function makeActivity(user) {
  let newActivity = new Activity(activityData, user)
  showActivityCard(newActivity)
}

function showActivityCard(newActivity) {
  let weeksActivityData = newActivity.getTodaysActivity(todaysDate)
  activity.innerHTML = `
  <section class="activity-miles"><p>Today's Miles Walked: ${newActivity.getMilesWalkedToday(todaysDate)} miles</p></section>
  <section class="activity-minutes"><p>Today's Active Minutes: ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-steps"><p>Today's Steps: ${newActivity.getUserActivityMinutes(todaysDate)}</p></section>
  <section class="activity-compare">
  <p>You walked: ${newActivity.getUserActivityToday(todaysDate).numSteps} steps today. The average was ${newActivity.getAveragesForAll(todaysDate, 'numSteps')}</p>
  <p>You climbed: ${newActivity.getUserActivityToday(todaysDate).flightsOfStairs} flights of stairs today. The average was ${newActivity.getAveragesForAll(todaysDate, 'flightsOfStairs')}</p>
  <p>You had: ${newActivity.getUserActivityToday(todaysDate).minutesActive} minutes active today. The average was ${newActivity.getAveragesForAll(todaysDate, 'minutesActive')}</p>
  <p>You had: ${newActivity.getUserActivityToday(todaysDate).minutesActive} minutes active today. The average was ${newActivity.getAveragesForAll(todaysDate, 'minutesActive')}</p>
  </section>
  <section class="activity-data"><p>Week of Activity Data</p>
  </section>
  `
}






makeUser()
// showInfoCard()
// showFirstName()
// compareStepGoal()




// Create an info card on the dashboard with all of user’s info on the page
// Display their first name somewhere prominently on the page to welcome them
// For a specific user, display how their step goal compares to the average step
//  goal amongst all users (this display should not be hard-coded)
