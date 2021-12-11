// Define variables for html elements
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var quizItems = document.getElementsByClassName("quizItems");
var questions = document.getElementsByClassName("question");
var answers = document.getElementsByClassName("answers");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var correct = document.getElementsByClassName("correct");
var incorrect = document.getElementsByClassName("incorrect");
var endPage = document.getElementById("endPage");
var clearBoard = document.getElementById("scoreClear");

var startPageMode = "visible"\


startButton.addEventListener("click", function() {

  if (startPageMode === "visible") {
    startPage.setAttribute("class", "hidden");
    q1.setAttribute("class", "visible");
  }
})


