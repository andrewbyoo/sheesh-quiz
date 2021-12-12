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
var endPage = document.getElementById("endPage");
var clearBoard = document.getElementById("scoreClear");
var i = 0;

// Quiz array of questions and answers
var questionInfo = [
  {
    question: "Lorem Ipsum Question 1",
    options: ["Lorem Ipsum Answer 1", "Lorem Ipsum Answer 2", "Lorem Ipsum Answer 3", "Lorem Ipsum Answer 4"],
    correctAnswer: "Lorem Ipsum Answer 4"
  },
  {
    question: "Lorem Ipsum Question 2",
    options: ["Lorem Ipsum Answer 1", "Lorem Ipsum Answer 2", "Lorem Ipsum Answer 3", "Lorem Ipsum Answer 4"],
    correctAnswer: "Lorem Ipsum Answer 4"
  },
  {
    question: "Lorem Ipsum Question 3",
    options: ["Lorem Ipsum Answer 1", "Lorem Ipsum Answer 2", "Lorem Ipsum Answer 3", "Lorem Ipsum Answer 4"],
    correctAnswer: "Lorem Ipsum Answer 4"
  },
  {
    question: "Lorem Ipsum Question 4",
    options: ["Lorem Ipsum Answer 1", "Lorem Ipsum Answer 2", "Lorem Ipsum Answer 3", "Lorem Ipsum Answer 4"],
    correctAnswer: "Lorem Ipsum Answer 4"
  },
  {
    question: "Lorem Ipsum Question 5",
    options: ["Lorem Ipsum Answer 1", "Lorem Ipsum Answer 2", "Lorem Ipsum Answer 3", "Lorem Ipsum Answer 4"],
    correctAnswer: "Lorem Ipsum Answer 4"
  }
]

// Event listener for button on splash screen to start quiz
startButton.addEventListener("click", function () {
  startPage.setAttribute("class", "hidden");
  quiz();
})


// Function for displaying the quiz
function quiz() {
  quizContainer.setAttribute("class", "visible");

  questions.innerHTML = questionInfo[i].question
  btn1.innerHTML = questionInfo[i].options[0]
  btn2.innerHTML = questionInfo[i].options[1]
  btn3.innerHTML = questionInfo[i].options[2]
  btn4.innerHTML = questionInfo[i].options[3]
}
