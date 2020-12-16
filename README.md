# FITLIT

Fitlit is a fitness-focused application that shows a user their recent performance by showing data related to their activity levels, their hydration habits, and their sleep behaviour. Upon loading their personalized screen, a user will be able to see their personal information, including the friends they have on the app, as well as the perfomance data organized in categorized columns. Inside of those columns a user can see a variety of information, for example - how many steps/miles a user has traveled for the day, the number of ounces of water a user has drank every day for the past week, and a user's all-time average sleep quality and number of hours slept nightly.

---
### Goals and Objectives

  - Implement ES6 classes that communicate to each other as needed.
  - Use object and array prototype methods to perform data manipulation.
  - Create a dashboard that is easy to use and displays information in a clear way on multiple screens.
  - Write modular, reusable code that follows SRP (Single Responsibility Principle).
  - Implement a robust testing suite using TDD.

---
### Technologies/Contributors

This Fitlit application is a paired project built by [Tashia Davis](https://github.com/tashiad) and [Cole Fiscus](https://github.com/colefiscus), two Mod 2 students at the [Turing School of Software and Design](turing.io).
Fitlit is built using vanilla JavaScript, HTML, and CSS. Packages used include the testing suite of Mocha and Chai, ESLint, and Chart.js. Project management was done using Github Projects and Github Issues, as well as [miro.com](https://miro.com/app/board/o9J_leo3VEo=/) for design layout.

---
### Install Instructions

To download and use Fitlit, you can fork and/or clone it to your local machine into your desired directory using the terminal - `git clone [repo link]`. Next navigate (`cd`) into that directory and enter the following command to open Fitlit in your browser - `open src/index.html`

Alternatively, click the following link to be sent to the app's deployed site: [Fitlit](https://tashiad.github.io/fitlit/src/index.html). 

---
### How to Use

Upon opening, Fitlit will load a random individual's data for the latest date available. The dashboard of the app will showcase the user's data in 4 sections. Up top is the user info card that will display personal information about the user as well as their step goal, how that goal compares to all users, and whether or not they have reached their step goal for that day. Below are three categorized sections including Hydration, Sleep, and Activity. In their respective columns, each category will show a user's data relative to that category. Featured are both widgets that will have a simple number + label design as well as graphs that will show a more detailed view of the user's weekly habits. To view another user and see how the data sections will change accordingly, simply refresh the page. The application is responsive so as to accommodate smaller screen sizes. 

<table><tr>
<td><img width="634" alt="Fitlit User Info Card" src="https://github.com/tashiad/fitlit/blob/README/README-images/Fitlit_1.png?raw=true"></td>
<td><img width="634" alt="Fitlit User Info Card" src="https://github.com/tashiad/fitlit/blob/README/README-images/Fitlit_2.png?raw=true"></td>
</tr></table>

---
### Wins & Challenges

**Wins**
  - We think our testing suite is effective and efficient, testing all properties, methods, and helper methods of our class files.
  - We believe we've done a good job of separating our data source of truth (Class files) from the DOM (`scripts.js`).
  - We got more comfortable with Git workflow: working on different branches at the same time, merging branches before merging to main, utilizing Github Issues and linking those to our project board.
  - We think the responsiveness of the user interface has worked well and shows the data effectively.
  - We learned how to use our first library, Chart.js.

**Challenges**
  - Possibly the biggest design challenge was deciding how to showcase the data effectively, especially as the amount of data to display for each category varied.
  - A couple of methods in our classes were difficult to refactor or successfully complete - we have corresponding Issues in our project board that we would like to revisit.
  - We had difficulties working with Chart.js for some of the Activity methods, still unsure what the problem was.
  
---
### Future Iterations

For future iterations we hope to include more user interaction - initially we hoped for some kind of dropdown menu to be able to directly select the user that was being shown on the page, as well as some kind of calendar functionality that would allow for selection of a different date period other than the 7 most recent days. 

We also hope to incorporate some kind of leaderboard for the different kinds of data adjacent to the user info card. This way a user could more easily identify how they compare to other users across multiple stats.

We would like to get more comfortable using charts to display additional data. We also would rethink our overall page layout considering the awkward user info display and the unused space towards the bottom of the page as a result of the activity column being longer.
