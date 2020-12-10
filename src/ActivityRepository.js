class ActivityRepository {
   constructor(activityInstanceData) {
     this.activityInstanceData = activityInstanceData;
   }

   returnMilesWalked() {
     // For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
   }

   returnMinutesActive() {
     // For a user, (identified by their userID) how many minutes were they active for a given day (specified by a date)?
   }

   calculateWeeklyAverageMinutesActive() {
     // For a user, how many minutes active did they average for a given week (7 days)?
   }

   determineStepGoalAchieved() {
     // For a user, did they reach their step goal for a given day (specified by a date)?
   }

   findDaysWithExceededStepGoal() {
     // For a user, find all the days where they exceeded their step goal
   }

   findFlightsOfStairsRecord() {
     // For a user, find their all-time stair climbing record
   }

   calculateAllUsersActivityAveragesOnDay() {
     // For all users, what is the average number of:
        // stairs climbed for a specified date
        // steps taken for a specific date
        // minutes active for a specific date
   }

 }

 if (typeof module !== 'undefined') {
   module.exports = ActivityRepository;
 }
