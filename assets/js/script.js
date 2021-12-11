// Define variables for html elements
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

startButton.addEventListener("click", function() {
  startPage.setAttribute("class", "hidden");
  quizContainer.setAttribute("class", "visible");
})
