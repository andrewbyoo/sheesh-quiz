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
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var endPage = document.getElementById("endPage");
var clearBoard = document.getElementById("scoreClear");

var startPageMode = "visible"
var grandParentMode = ""


startButton.addEventListener("click", function() {

  if (startPageMode === "visible") {
    startPageMode = "hidden"
    startPage.setAttribute("class", "hidden");
    q1.setAttribute("class", "visible");
  }
})

incorrect.addEventListener("click", function() {

  grandParentId = this.parentElement.parentElement.parentElement.id
  console.log(grandParentId)

  if (grandParentId === "q1") {

    grandParentMode = this.parentElement.parentElement.parentElement.className
    console.log(grandParentMode)

    if (grandParentMode === "visible") {
      q1.setAttribute("class", "hidden");
      q2.setAttribute("class", "visible");
    }
  }

  if (grandParentId === "q2") {

    grandParentMode = this.parentElement.parentElement.parentElement.className
    console.log(grandParentMode)

    if (grandParentMode === "visible") {
      q2.setAttribute("class", "hidden");
      q3.setAttribute("class", "visible");
    }
  }
})
