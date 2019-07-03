class HydrationRepo {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.filter(record => record.userID === id);
  }

}

module.exports = HydrationRepo;