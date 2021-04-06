const newUserRepo = new UserRepository(userData);
const newUser = new User(userData[0]);


/* *****Query Selectors***** */
const welcomeMessage = document.querySelector("#welcomeMessage");
const infoCard = document.querySelector("#infoCard");
const stepGoals = document.querySelector("#stepGoals");

/* *****Event Listeners***** */
window.addEventListener("load", displayUser);


/* *****Functions***** */
function displayUser() {
  welcomeUser();
  displayInfoCard();
  compareStepGoal();
}

function welcomeUser() {
  welcomeMessage.innerText = `Welcome, ${newUser.firstName()}!`;
}

function displayInfoCard() {
  infoCard.innerHTML = `
    <!-- <p class="user-detail card-flex">Name: ${newUser.name}</p> -->
    <!-- <p class="user-detail radness">Address: ${newUser.address}</p> -->
    <!-- <p class="user-detail radness">Email: ${newUser.email}</p> -->
    <p class="user-detail radness">Stride Length: ${newUser.strideLength}</p>
    <p class="user-detail radness">Daily Step Goal: ${newUser.dailyStepGoal}</p>
    <!-- <p class="user-detail radness">Friends: ${newUser.friends}</p> -->
  `
}

function compareStepGoal() {
  stepGoals.innerHTML = `
    <p class="step-goal radness">Your Step Goal: ${newUser.dailyStepGoal}</p>
    <p class="step-goal radness">Average Step Goal: ${newUserRepo.calculateAvgStepGoal()}</p>
  `
  //display how user step goal compares to average step goal of all users
}

// function displayWaterToday() {
//
// }

// function displayAvgWater() {
//
// }
