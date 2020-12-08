class UserRepository {
  constructor(data) {
    this.data = data;
    this.users = [];
  }

  createUserInstances() {
    this.data.forEach(userData => {
      const user = new User(userData);
      this.users.push(user);
    }
  }

  returnUserData(userId) {
    return this.data.find(user => user.id === userId);
  }

  calculateAverageStepGoal() {
    const totalStepGoal = this.data.reduce((acc, user) => {
      return acc + user.dailyStepGoal;
    }, 0);
    return Math.floor(totalStepGoal / this.data.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
