class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUserData(userId) {
    return this.users.find(user => user.id === userId);
  }

  getAllUserAvgStepGoal() {
    const totalStepGoal = this.users.reduce((totalSteps, user) => {
      return totalSteps + user.dailyStepGoal;
    }, 0);
    const avg = Math.floor(totalStepGoal / this.users.length);
    return avg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getUserFriendNames(userId) {
    const user = this.getUserData(userId);
    const names = [];
    user.friends.forEach(friend => {
      const matchingIds = this.users.filter(user => {
        return user.id === friend;
      })
      matchingIds.forEach(user => names.push(user.name));
    })
    return names.join(' <br> ');
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
