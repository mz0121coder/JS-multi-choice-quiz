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
  