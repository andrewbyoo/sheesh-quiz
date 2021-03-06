// Defined variables
var showScoreLnk = document.getElementById("showScoreLnk")
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var startPage = document.getElementById("startPage");
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quizContainer");
var questions = document.getElementById("questions");
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
var scoreList = document.getElementById("scoreList");
var restartBtn = document.getElementById("restartBtn");
var clearBoard = document.getElementById("scoreClear");
var i = 0;
var timeScore;
var timeInterval;

// Quiz array of questions and answers
var questionInfo = [
  {
    question: "What species is Elira?",
    options: ["Forest Fairy", "Solar Sky Dragon", "Lunar Sky Dragon", "Tropical Mermaid"],
    correctAnswer: "Solar Sky Dragon"
  },
  {
    question: "What VTuber agency does Elira work for?",
    options: ["Hololive", "Tsunderia", "Nijisanji", "VShojo"],
    correctAnswer: "Nijisanji"
  },
  {
    question: "What is the name of Elira's companion?",
    options: ["Pomu", "Pikl", "Petra", "Ember"],
    correctAnswer: "Pikl"
  },
  {
    question: "Who, canonically, is Elira's sister?",
    options: ["Selen Tatsuki", "Finana Ryugu", "Petra Gurin", "Enna Alouette"],
    correctAnswer: "Selen Tatsuki"
  },
  {
    question: "What is the first song Elira and her gen-mates released?",
    options: ["Black Out", "Diamond City Lights", "Trial and Error", "intro reality"],
    correctAnswer: "Diamond City Lights"
  },
  {
    question: "What is the name of Elira's generation?",
    options: ["Ethyria", "OBSYDIA", "3SetBBQ", "LazuLight"],
    correctAnswer: "LazuLight"
  },
  {
    question: "What is the name of Elira's fanbase?",
    options: ["Famlira", "Dragoons", "PenPals", "Piklites"],
    correctAnswer: "Famlira"
  },
  {
    question: "What is the name of Elira's membership?",
    options: ["Sheesh", "Sheeshclub", "Membersheesh", "Submarsheesh"],
    correctAnswer: "Membersheesh"
  },
  {
    question: "What is Elira's birthday?",
    options: ["September 16th", "September 26th", "October 26th", "October 16th"],
    correctAnswer: "October 16th"
  }
  // Additional questions can be input here and will automatically fill into the quiz (Must be multiple choice with 4 options and 1 answer)
]

// Link to show scoreboard without logging a score
showScoreLnk.addEventListener("click", function () {

  // Stop timer if link is clicked mid quiz
  clearInterval(timeInterval);

  // Clears time if link is clicked mid or post quiz
  timeScore = "";

  // Clears the visual scoreboard to allow for the updated scores to be displayed
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }

  // Hides splash page or quiz if pre or mid quiz and moves to the score board
  startPage.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "hidden");
  showScoreboard();
})

// Event listener for button on splash screen to start quiz
startBtn.addEventListener("click", function () {

  // Hides splash screen
  startPage.setAttribute("class", "hidden");

  // Shows quiz and starts the timer
  quizContainer.setAttribute("class", "visible");
  startTimer();
  quiz();
})

// Function to start timing the quiz
function startTimer() {

  // Sets the timer to be visible
  timer.style.display = "inline";

  // Sets starting value of timer and displays it on screen
  timeScore = 90;
  timeLeft.innerHTML = timeScore;

  // Use setInterval() to call execute a function every second
  timeInterval = setInterval(function () {

    // When the timer has 1 or more seconds left
    if (timeScore >= 1) {

      // Decrease time left
      timeScore--;

      // Display current time left
      timeLeft.innerHTML = timeScore;
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

  // Preps the quiz for the next question
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
  incorrect.setAttribute("class", "hidden");
  timeScore += 5;
  timeLeft.innerHTML = timeScore;
}

// When answered incorrectly, show failure message for 2 seconds and hide the congratulatory message if still displayed
function answeredIncorrectly() {
  incorrect.setAttribute("class", "visible");
  correct.setAttribute("class", "hidden");
  timeScore -= 10;
  timeLeft.innerHTML = timeScore;
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

  // Hides quiz page
  quizContainer.setAttribute("class", "hidden");

  // Stop timer and show final time on timer and end page
  clearInterval(timeInterval);

  // If score goes below 0, sets score to 0
  if (timeScore < 0) {
    timeScore = 0;
  }

  // Shows final time on corner timer
  timeLeft.innerHTML = timeScore;

  // Shows end page
  endPage.setAttribute("class", "visible");

  // Adds final score/time on the end page
  finalScore.innerHTML = "Your final score is " + timeScore + ".";
}

initials.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    initialsCheck();
  }
})

// Button function to log final score
logScoreBtn.addEventListener("click", function () {
  initialsCheck()
})

function initialsCheck() {
  var initialsValue = initials.value;

  // If no initials are input, display a red border and add placeholder text
  if (initialsValue === "") {
    initials.setAttribute("placeholder", "Initials are required");
    initials.style.borderColor = "red";
  } else {
    // Resets text and border color for next test run if page is not refreshed and runs the logScore and showScoreboard functions
    initials.setAttribute("placeholder", "");
    initials.style.borderColor = "";
    logScore();
    initials.value = "";
    showScoreboard();
  }
}

// Function to pull existing JSON array, add new score object, and then push the new JSON array back to local storage
function logScore() {

  // Pulls previous local storage
  scoreStorage = JSON.parse(localStorage.getItem("scoreStorage"));

  // If local storage is empty, creates a new empty array
  if (scoreStorage == null) {
    scoreStorage = [];
  }

  // Defines the object with the user's initials and score
  var newScore = {
    "participant": initials.value.toUpperCase(),
    "score": timeLeft.textContent
  };

  // Adds new score to the previous scores, sorts the results from highest score to lowest score, and sends the result back into local storage
  scoreStorage.push(newScore);
  scoreStorage.sort((a, b) => b.score - a.score);
  localStorage.setItem("scoreStorage", JSON.stringify(scoreStorage));
}

// Function to hide the quiz end page and show the scoreboard
function showScoreboard() {
  endPage.setAttribute("class", "hidden");
  correct.setAttribute("class", "hidden");
  incorrect.setAttribute("class", "hidden");

  // Pulls most up to date scores from local storage
  scoreStorage = JSON.parse(localStorage.getItem("scoreStorage"));

  // Adds list item for each score listed in local storage
  if (scoreStorage.length < 10) {
    for (i = 0; i < scoreStorage.length; i++) {
      var newli = document.createElement("li");
      newli.innerHTML = scoreStorage[i].participant + " - " + scoreStorage[i].score;
      scoreList.appendChild(newli);
    }
  } else {
    for (i = 0; i < 10; i++) {
      var newli = document.createElement("li");
      newli.innerHTML = scoreStorage[i].participant + " - " + scoreStorage[i].score;
      scoreList.appendChild(newli);
    }
  }

  scoreboard.setAttribute("class", "visible");
}

// Event listener for restart button on scoreboard page to restart quiz
restartBtn.addEventListener("click", function () {

  // Hides splash screen
  scoreboard.setAttribute("class", "hidden");

  // Shows quiz at first question, starts the timer, and preps the scoreboard
  quizContainer.setAttribute("class", "visible");
  startTimer();
  i = 0;
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
  quiz();
})

// Event listener for clear scoreboard button to clear the visible board and local storage
clearBoard.addEventListener("click", function () {
  localStorage.clear();
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
})
