var intro = document.querySelector(".criteriapage");
var crit = document.querySelector(".quiz-criteria");
var startBtn = document.querySelector("startedBtn");
var timer = document.getElementById("timer");
var answers = document.querySelectorAll("#questArea button");
var time = 100;
var score = 0;
var quizCount = 0;
var recordArray = [];
var userScores = [];
var clock;
var setTime; 

var pageContentEl = function (element) {
    return document.querySelector(element);
  };
  //hidden
  var onlyDisplaySection = function (element) {
    let sections = document.querySelectorAll("section");
    Array.from(sections).forEach(function (userItem) {
      userItem.classList.add("hidden");
    });
    pageContentEl(element).classList.remove("hidden");
  };
  //achieved score
var quizUpdate = function (answerCopy) {
    pageContentEl("#achievedScore p").innerHTML = answerCopy;
    pageContentEl("#achievedScore").classList.remove("gone", achievedScore());
    Array.from(answers).forEach((answer) => {
      answer.classList.add("disable");
    });
      //quiz completed
  setTimeout(function () {
    if (quizCount === questions.length) {
      onlyDisplaySection("#finish");
      time = 0;
      pageContentEl("#time").innerHTML = time;
    } else {
      setQuestionData();
      Array.from(answers).forEach((answer) => {
        answer.classList.remove("disable");
      });
    }
  }, 1000);
};
//timer
var counterTimer = function () {
    if (time > 0) {
      time = time - 1;
      pageContentEl("#time").innerHTML = time;
      //end
    } else {
      clearInterval(clock);
      pageContentEl("#score").innerHTML = score;
      onlyDisplaySection("#finish");
    }
  };
  //questions function
  var setQuestionData = function () {
    pageContentEl("#questArea p").innerHTML = questions[quizCount].questionInfo;
    pageContentEl(
      "#questArea button:nth-of-type(1)"
    ).innerHTML = `1. ${questions[quizCount].choices[0]}`;
    pageContentEl(
      "#questArea button:nth-of-type(2)"
    ).innerHTML = `2. ${questions[quizCount].choices[1]}`;
    pageContentEl(
      "#questArea button:nth-of-type(3)"
    ).innerHTML = `3. ${questions[quizCount].choices[2]}`;
    pageContentEl(
      "#questArea button:nth-of-type(4)"
    ).innerHTML = `4. ${questions[quizCount].choices[3]}`;
  };

