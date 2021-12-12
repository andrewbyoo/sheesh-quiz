// Defined variables
var timer = document.getElementById("timer");
var timeLabel = document.getElementById("timeLabel");
var timeLeft = document.getElementById("timeLeft");
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("quizContainer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var endPage = document.getElementById("endPage");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var logScoreBtn = document.getElementById("logScoreBtn");
var scoreStorage = [];
var scoreboard = document.getElementById("scoreboard");
var clearBoard = document.getElementById("scoreClear");
var i = 0;
var timeScore = "";
var timeInterval = "";

// Quiz array of questions and answers
var questionInfo = [
  {
    question: "Lorem Ipsum Question 1",
    options: ["Lorem Ipsum Q1 Answer 1", "Lorem Ipsum Q1 Answer 2", "Lorem Ipsum Q1 Answer 3", "Lorem Ipsum Q1 Answer 4"],
    correctAnswer: "Lorem Ipsum Q1 Answer 1"
  },
  {
    question: "Lorem Ipsum Question 2",
    options: ["Lorem Ipsum Q2 Answer 1", "Lorem Ipsum Q2 Answer 2", "Lorem Ipsum Q2 Answer 3", "Lorem Ipsum Q2 Answer 4"],
    correctAnswer: "Lorem Ipsum Q2 Answer 2"
  },
  {
    question: "Lorem Ipsum Question 3",
    options: ["Lorem Ipsum Q3 Answer 1", "Lorem Ipsum Q3 Answer 2", "Lorem Ipsum Q3 Answer 3", "Lorem Ipsum Q3 Answer 4"],
    correctAnswer: "Lorem Ipsum Q3 Answer 3"
  },
  {
    question: "Lorem Ipsum Question 4",
    options: ["Lorem Ipsum Q4 Answer 1", "Lorem Ipsum Q4 Answer 2", "Lorem Ipsum Q4 Answer 3", "Lorem Ipsum Q4 Answer 4"],
    correctAnswer: "Lorem Ipsum Q4 Answer 4"
  },
  {
    question: "Lorem Ipsum Question 5",
    options: ["Lorem Ipsum Q5 Answer 1", "Lorem Ipsum Q5 Answer 2", "Lorem Ipsum Q5 Answer 3", "Lorem Ipsum Q5 Answer 4"],
    correctAnswer: "Lorem Ipsum Q5 Answer 1"
  }
  // Additional questions can be input here and will automatically fill into the quiz (Must be multiple choice with 4 options and 1 answer)
]

// Event listener for button on splash screen to start quiz
startButton.addEventListener("click", function () {
  startPage.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "visible");
  startTimer();
  quiz();
})

// Function to start timing the quiz
function startTimer() {

  // Sets the timer to be visible
  timer.setAttribute("class", "visible");

  // Sets starting value of timer and displays it on screen
  timeScore = 60;
  timeLeft.innerHTML = timeScore

  // Use setInterval() to call execute a function every second
  timeInterval = setInterval(function () {

    // When the timer has 1 or more seconds left
    if (timeScore >= 1) {

      // Display current time left
      timeLeft.innerHTML = timeScore;

      // Decrease time left
      timeScore--;
    } else {

      // When timer hits 0 or lower, display 0
      timeLeft.innerHTML = "0";

      // Changes page to end page
      showEndScreen();
    }
  }, 1000);
}

// Function for displaying the each quiz question
function quiz() {
  questions.innerHTML = questionInfo[i].question;
  btn1.innerHTML = questionInfo[i].options[0];
  btn2.innerHTML = questionInfo[i].options[1];
  btn3.innerHTML = questionInfo[i].options[2];
  btn4.innerHTML = questionInfo[i].options[3];
  i++;
}

// Answer 1 button
btn1.addEventListener("click", function () {

  // Determines if answer is correct or incorrect
  if (btn1.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly();
  } else {
    answeredIncorrectly();
  }
  endTestCheck();
})

// Answer 2 button
btn2.addEventListener("click", function () {

  // Determines if answer is correct or incorrect
  if (btn2.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly();
  } else {
    answeredIncorrectly();
  }
  endTestCheck();
})

// Answer 3 button
btn3.addEventListener("click", function () {

  // Determines if answer is correct or incorrect
  if (btn3.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly();
  } else {
    answeredIncorrectly();
  }
  endTestCheck();
})

// Answer 4 button
btn4.addEventListener("click", function () {

  // Determines if answer is correct or incorrect
  if (btn4.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly();
  } else {
    answeredIncorrectly();
  }
  endTestCheck();
})

// When answered correctly, show congratulatory message for 2 seconds and hide the incorrect message if still displayed
function answeredCorrectly() {
  correct.setAttribute("class", "visible");
  setTimeout(function() {
    correct.setAttribute("class", "hidden");
  }, 2000);
  incorrect.setAttribute("class", "hidden");
  timeScore += 5;
}

// When answered incorrectly, show failure message for 2 seconds and hide the congratulatory message if still displayed
function answeredIncorrectly() {
  incorrect.setAttribute("class", "visible");
  setTimeout(function() {
    incorrect.setAttribute("class", "hidden");
  }, 2000);
  correct.setAttribute("class", "hidden");
  // Add code to remove 5 seconds from timer and once tested and working, add to other buttons
  timeScore -= 10;
}

// When an answer button is clicked, moves quiz to the next question and if there are no more questions, move to end screen
function endTestCheck() {
  if (i == questionInfo.length) {
    showEndScreen();
  } else {
    quiz();
  }
}

// Function to hide quiz and show the end screen
function showEndScreen() {
  quizContainer.setAttribute("class", "hidden");
  endPage.setAttribute("class", "visible");

  // Stop timer and show final time on timer and end page
  clearInterval(timeInterval);
  timeLeft.innerHTML = timeScore;
  finalScore.innerHTML = "Your final score is " + timeScore + ".";
}

// Button function to log final score
logScoreBtn.addEventListener("click", function () {
  var initialsValue = initials.value;

  // If no initials are input, display a red border and add placeholder text
  if (initialsValue === "") {
    initials.setAttribute("placeholder", "Initials are required");
    initials.style.borderColor = "red";
  } else {
    // Resets placeholder text and border color for next test run if page is not refreshed and runs the logScore and showScoreboard functions
    initials.setAttribute("placeholder", "");
    initials.style.borderColor = "";
    logScore();
    showScoreboard();
  }
})

// Function to pull existing JSON array, add new score object, and then push the new JSON array back to local storage
function logScore() {

  // Pulls previous local storage
  var previousScoreStorage = JSON.parse(localStorage.getItem("scoreStorage"));

  // If local storage is empty, creates a new empty array
  if (previousScoreStorage == null) {
    previousScoreStorage = [];
  }

  // Defines the object with the user's initials and score
  var newScore = {
    "participant": initials.value,
    "score": timeLeft.textContent
  };

  // Adds new score to the previous scores and sends the result back into local storage
  previousScoreStorage.push(newScore);
  localStorage.setItem("scoreStorage", JSON.stringify(previousScoreStorage));
}

// Function to hide the quiz end page and show the scoreboard
function showScoreboard() {
  endPage.setAttribute("class", "hidden");
  scoreboard.setAttribute("class", "visible");
}
