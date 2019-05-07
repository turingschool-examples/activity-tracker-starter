const userData = require('../data/users')

class User {
  constructor(userData) {
    this.person = userData;
  }
  returnFirstName() {
    return this.person.name.split(' ')[0];
  }
}

module.exports = User;