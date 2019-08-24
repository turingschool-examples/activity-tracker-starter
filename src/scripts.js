console.log("Hello World");
$(document).ready(() => {
     
  const idRandom = Math.ceil(Math.random() * 50 - 1);
  const userRepository = new UserRepository(userData);
  const userDataArray = userRepository.fetchUserData(idRandom);
  const currentUser = new User(userDataArray);

  const $profileInfoSection = $('.profile-info');
  const $sleepinfo = $('.sleep-info');
  const $hydrationInfo = $('.hydration-info');
  const $activityInfo = $('.activity-info');

  $('.profile-first-name').text(currentUser.findUserFirstName());
  $('.profile-name').text(currentUser.name);
  $('.profile-address').text(currentUser.address);
  $('.profile-email').text(currentUser.email);
  $('.profile-stride-length').text(currentUser.strideLength);
  $('.profile-daily-step-goal').text(currentUser.dailyStepGoal);
  $('.avg-step-goal-of-all-users').text(userRepository.findAverageStepGoalOfAllUsers());
  $('.today').text(dateToday());

})


const dateToday = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    // console.log(new Intl.DateTimeFormat('en-US', mm).format(today));
    const yyyy = today.getFullYear();
    if (dd<10) {
        dd=`0${dd}`;
    } 
    if (mm<10) {
        mm=`0${mm}`;
    } 
// today = `${yyyy}/${mm}/${dd}`;
today = `${mm}/${dd}/${yyyy}`;
// console.log(today);
return today;
}