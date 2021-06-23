var intro = document.querySelector(".criteriapage");
var crit = document.querySelector(".quiz-criteria");
var startBtn = document.querySelector("startedBtn");
var timer = document.getElementById("timer");
var answers = document.querySelectorAll("#questArea button");
var time = 250;
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
  //questions & answers
  var questions = [
    {
      questionInfo: "Which of the following is a valid type of function javascript supports?",
      choices: ["named function", "anonymous function", "Both of the above.", "None of the above."],
      answer: "Both of the above.",
    }, 
    {
        questionInfo: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["last()", "put()", "push()", "None of the above."],
        answer: "push()",
    }, 
    {
        questionInfo: "Which built-in method returns the characters in a string beginning at the specified location?",
        choices: ["substr()", "getSubstring()", "slice()", "None of the above."],
        answer: "substr()",
    }, 
    {
        questionInfo: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
        choices: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
        answer: "charCodeAt()",
    }, 
    {
        questionInfo: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        choices: ["slice()", "split()", "replace()", "search()"],
        answer: "split()",
    }, 
    {
        questionInfo: "Which of the following function of String object returns the primitive value of the specified object?",
        choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "valueOf()"],
        answer: "valueOf()",
    }, 
    {
        questionInfo: "Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
        choices: ["fixed()", "fontcolor()", "blink()", "bold()"],
        answer: "fontcolor()",
    }, 
    {
        questionInfo: "Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?",
        choices: ["indexOf()", "join()", "lastIndexOf()", "map()"],
        answer: "lastIndexOf()",
    }, 
    {
        questionInfo: "Which of the following function of Array object sorts the elements of an array?",
        choices: ["toSource()", "sort()", "toString()", "unshift()"],
        answer: "sort()",
    }, 
    {
        questionInfo: "Commonly Used Data types do NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        questionInfo:
          "The condition in an if / else statement is enclosed within _________",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        questionInfo: "Arrays in JavaScript can be used to store ________",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above",
        ],
        answer: "all of the above",
    },
    {
        questionInfo:
          "String values must be enclosed within ________ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        questionInfo:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
];
///time 
var viewHighScores = function (view) {
    view.preventDefault();
    clearInterval(clock);
    pageContentEl("#time").innerHTML = 0;
    time = 250;
    score = 0;
    quizCount = 0;
    onlyDisplaySection("#highScores");
    recordsHtmlReset();
  };    
 //Start 
var startQuiz = function () {
    setQuestionData();
    onlyDisplaySection("#questArea");
    clock = setInterval(counterTimer, 1000);
  };   
//right/wrong answer 
var achievedScore = function () {
    clearTimeout(setTime);
    setTime = setTimeout(function () {
      pageContentEl("#achievedScore").classList.add("gone");
    }, 1000);
  };
//total score
var scoreTimeAdjust = function () {
    if (
      this.innerHTML.substring(3, this.length) === questions[quizCount].answer
    ) {
      score = score + 5;
      quizCount = quizCount + 1;
      quizUpdate("Correct");
    } else {
      time = time - 10;
      quizCount = quizCount + 1;
      quizUpdate("Incorrect");
    }
  };
  
      

