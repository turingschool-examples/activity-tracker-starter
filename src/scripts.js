// ~~~~~ QUERY SELECTORS ~~~~~
const header = document.querySelector('.header');
const userInfoCard = document.querySelector('.user-info-card');
const hydrationSection = document.querySelector('.hydration');
const sleepSection = document.querySelector('.sleep');
const activitySection = document.querySelector('.activity');

// ~~~~~ EVENT LISTENERS ~~~~~
window.onload = start;

// ~~~~~ GLOBAL VARIABLES ~~~~~
const users = userData.map(userObj => {
  const user = new User(userObj);
  return user;
});
const userRepo = new UserRepo(users);

const allHydration = hydrationData.map(hydrationObj => {
  const hydration = new Hydration(hydrationObj);
  return hydration;
});
const hydrationRepo = new HydrationRepo(allHydration);

const allSleep = sleepData.map(sleepObj => {
  const sleep = new Sleep(sleepObj);
  return sleep;
});
const sleepRepo = new SleepRepo(allSleep);

const allActivity = activityData.map(activityObj => {
  const activity = new Activity(activityObj);
  return activity;
});
const activityRepo = new ActivityRepo(allActivity);

// ~~~~~ FUNCTIONS ~~~~~
function start() {
  // userNameGreeting.innerText = `Hello, ${users[5].returnFirstName()}`;
  displayUserInfoCard(users[5]);
  displayHydrationInfo(users[5], "2019/06/24");
  displaySleepInfo(users[5], "2019/06/24");
  displayActivityInfo(users[5], "2019/06/24");
}

function displayUserInfoCard(user) {
  header.innerHTML = `
    <h1>My Fitness Data</h1>
    <h2>Hello, ${user.getFirstName()}!</h2>
  `
  userInfoCard.innerHTML = `
    <div class="user widget">
      <div class="infosection">
        <p><b>Your User ID:</b></p>
        <p>${user.id}</p>
      </div>
      <div class="infosection">
        <p><b>Your Name:</b></p>
        <p>${user.name}</p>
      </div>
      <div class="infosection">
        <p><b>Your Email:</b></p>
        <p>${user.email}</p>
      </div>
      <p><b>Your Friends:</b></p>
      <p>${userRepo.getUserFriendNames(user.id)}</p>
    </div>
    <div class="user widget">
      <p class="number">${user.strideLength} ft</p>
      <p class="description">your stride length</p>
      <p class="number">${user.getFormattedStepGoal()} steps</p>
      <p class="description">your daily step goal</p>
      <p class="number">${userRepo.getAllUserAvgStepGoal()}</p>
      <p class="description">avg user step goal</p>
    </div>`;
}

function displayHydrationInfo(user, date) {
  const pastWeekHydration = hydrationRepo.getUserOzByWeek(user.id, date);
  // pastWeekHydrationObjects.forEach(hydration => hydration.date = moment(hydration.date, "MMM-DD")
  hydrationSection.innerHTML = `
    <h2>Hydration</h2>
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserOzByDate(user.id, date)} oz</p>
      <p class="description">water drank today</p>
    </div>
    <div class="hydration widget">
      <p class="number">${hydrationRepo.getUserAvgDailyOzAllTime(user.id)} oz/day</p>
      <p class="description">average water drank</p>
    </div>
    <div class="hydration widget">
      <p>Your hydration stats by week:</p>
      <p>${pastWeekHydration[0].date}: ${pastWeekHydration[0].numOunces} oz</p>
      <p>${pastWeekHydration[1].date}: ${pastWeekHydration[1].numOunces} oz</p>
      <p>${pastWeekHydration[2].date}: ${pastWeekHydration[2].numOunces} oz</p>
      <p>${pastWeekHydration[3].date}: ${pastWeekHydration[3].numOunces} oz</p>
      <p>${pastWeekHydration[4].date}: ${pastWeekHydration[4].numOunces} oz</p>
      <p>${pastWeekHydration[5].date}: ${pastWeekHydration[5].numOunces} oz</p>
      <p>${pastWeekHydration[6].date}: ${pastWeekHydration[6].numOunces} oz</p>
    </div>`;
}

function displaySleepInfo(user, date) {
  const pastWeekSleep = sleepRepo.getSleepDataByWeek(user.id, date);
  sleepSection.innerHTML = `
    <h2>Sleep</h2>
    <div class="widget">
      <p>Hours slept last night: ${sleepRepo.getUserSleepHrsByDate(user.id, date)}</p>
      <p>Sleep quality last night: ${sleepRepo.getUserSleepQualityByDate(user.id, date)}</p>
    </div>
    <div class="widget">
      <p>All-time average sleep quality: ${sleepRepo.getUserAvgSleepQualityAllTime(user.id)}</p>
      <p>All-time average hours slept: ${sleepRepo.getUserAvgHrsSleptAllTime(user.id)}</p>
    </div>
    <div class="widget">
      <p>Your sleep stats by week</p>
      <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Hours Slept</th>
                  <th>Quality</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>${pastWeekSleep[0].date}</td>
                  <td>${pastWeekSleep[0].hoursSlept}</td>
                  <td>${pastWeekSleep[0].sleepQuality}</td>
              </tr>
          </tbody>
      </table>
      <p>${pastWeekSleep[0].date}: ${pastWeekSleep[0].hoursSlept} | ${pastWeekSleep[0].sleepQuality}</p>
      <p>${pastWeekSleep[1].date}: ${pastWeekSleep[1].hoursSlept} | ${pastWeekSleep[1].sleepQuality}</p>
      <p>${pastWeekSleep[2].date}: ${pastWeekSleep[2].hoursSlept} | ${pastWeekSleep[2].sleepQuality}</p>
      <p>${pastWeekSleep[3].date}: ${pastWeekSleep[3].hoursSlept} | ${pastWeekSleep[3].sleepQuality}</p>
      <p>${pastWeekSleep[4].date}: ${pastWeekSleep[4].hoursSlept} | ${pastWeekSleep[4].sleepQuality}</p>
      <p>${pastWeekSleep[5].date}: ${pastWeekSleep[5].hoursSlept} | ${pastWeekSleep[5].sleepQuality}</p>
      <p>${pastWeekSleep[6].date}: ${pastWeekSleep[6].hoursSlept} | ${pastWeekSleep[6].sleepQuality}</p>
    </div>`;
}

function displayActivityInfo(user, date) {
  const pastWeekActivityObjects = activityRepo.getActivityDataByWeek(user.id, date);
  activitySection.innerHTML = `
    <h2>Activity</h2>
    <div class="widget">
      <p>Steps taken today: ${activityRepo.returnStepsTaken(user, date)}</p>
      <p>Minutes active today: ${activityRepo.returnMinutesActive(user, date)}</p>
      <p>Distance walked today: ${activityRepo.returnMilesWalked(user, date)} miles</p>
      <p>Flights of stairs climbed today: ${activityRepo.returnStairs(user, date)}</p>
    </div>
    <div class="widget">
      <p>All users steps taken today: ${activityRepo.getAllUserAvgSteps(date)}</p>
      <p>All users minutes active today: ${activityRepo.getAllUserTotalMins(date)}</p>
      <p>All users flights of stairs climbed today: ${activityRepo.getAllUserTotalStairs(date)}</p>
    </div>
    <div class="widget">
      <p>You activity stats by week:</p>
      <p>${pastWeekActivityObjects[0].date}: ${pastWeekActivityObjects[0].numSteps} steps taken, ${pastWeekActivityObjects[0].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[1].date}: ${pastWeekActivityObjects[1].numSteps} steps taken, ${pastWeekActivityObjects[1].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[2].date}: ${pastWeekActivityObjects[2].numSteps} steps taken, ${pastWeekActivityObjects[2].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[3].date}: ${pastWeekActivityObjects[3].numSteps} steps taken, ${pastWeekActivityObjects[3].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[4].date}: ${pastWeekActivityObjects[4].numSteps} steps taken, ${pastWeekActivityObjects[4].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[5].date}: ${pastWeekActivityObjects[5].numSteps} steps taken, ${pastWeekActivityObjects[5].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
      <p>${pastWeekActivityObjects[6].date}: ${pastWeekActivityObjects[6].numSteps} steps taken, ${pastWeekActivityObjects[6].minutesActive} minutes active, ${pastWeekActivityObjects[0].flightsOfStairs} flights of stairs climbed</p>
    </div>`;
}
