const allUsers = new UserRepository(userData);

let person = allUsers.getUser(getRandomNumber())

let user = new User(person)
console.log(user)

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



$('.header__span').text(user.returnFirstName());
$("#step-goal").text(user.dailyStepGoal);
$('#avg-steps').append(allUsers.returnAvgStepGoal())


console.log(user.name)
console.log(getRandomNumber())