// Defined variables
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
var clearBoard = document.getElementById("scoreClear");
var i = 0;

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
]

// Event listener for button on splash screen to start quiz
startButton.addEventListener("click", function () {
  startPage.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "visible");
  quiz();
})

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
  if (btn1.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly()
  } else {
    answeredIncorrectly()
    // Add code to remove 5 seconds from timer and once tested and working, add to other buttons
  }

  if (i == questionInfo.length) {
    showEndScreen();
  } else {
    quiz();
  }
})

// Answer 2 button
btn2.addEventListener("click", function () {
  if (btn2.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly()
  } else {
    answeredIncorrectly()
  }

  if (i == questionInfo.length) {
    showEndScreen();
  } else {
    quiz();
  }
})

// Answer 3 button
btn3.addEventListener("click", function () {
  if (btn3.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly()
  } else {
    answeredIncorrectly()
  }

  if (i == questionInfo.length) {
    showEndScreen();
  } else {
    quiz();
  }
})

// Answer 4 button
btn4.addEventListener("click", function () {
  if (btn4.innerHTML == questionInfo[i-1].correctAnswer) {
    answeredCorrectly()
  } else {
    answeredIncorrectly()
  }

  if (i == questionInfo.length) {
    showEndScreen();
  } else {
    quiz();
  }
})

// What occurs when a question is answered correctly
function answeredCorrectly() {
  correct.setAttribute("class", "visible");
  setTimeout(function() {
    correct.setAttribute("class", "hidden");
  }, 2000);
  incorrect.setAttribute("class", "hidden");
}

// What occurs when a question is answered incorrectly
function answeredIncorrectly() {
  incorrect.setAttribute("class", "visible");
  setTimeout(function() {
    incorrect.setAttribute("class", "hidden");
  }, 2000);
  correct.setAttribute("class", "hidden");
}

// Function to hide quiz and show the end screen
function showEndScreen() {
  quizContainer.setAttribute("class", "hidden");
  endPage.setAttribute("class", "visible");
}
