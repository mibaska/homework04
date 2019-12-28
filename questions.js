var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var quizTime = questions.length * 15;

var timer = document.querySelector("#timer");

var quizButton = document.querySelector("#quizButton");

var highscoreButton = document.querySelector("#highscoreButton");

var quizBox = document.querySelector("#quizBox");

var correctChoice = document.createElement("p");
correctChoice.textContent = "Correct!";

var wrongChoice = document.createElement("p");
wrongChoice.textContent = "Wrong!";

var choiceInput = document.createElement("div");

var nextButton = document.createElement("div");

var interval;

var i = -1;

var score = 0;

quizButton.addEventListener("click", function(event) {
  event.preventDefault();

  timer.textContent = "Time: " + quizTime;
  interval = setInterval(countdown, 1000);
  function countdown() {
    if(quizTime > 0) {
      quizTime--;
      timer.textContent = "Time: " + quizTime;
    } else if(quizTime = 0) {
      alert("Time's Up!");
      break;
    }
  }

  quizBox.innerHTML = "";
  i++;

  if(i < 6) {
    var question = document.createElement("h3");
    question.setAttribute("class", "text-center");
    question.textContent = questions[i].title;
    quizBox.appendChild(question);

    var choice1 = document.createElement("button");
    choice1.setAttribute("type", "button");
    choice1.setAttribute("class", "btn btn-secondary");
    choice1.textContent = questions[i].choices[0];
    quizBox.appendChild(choice1);
    var enter1 = document.createElement("br");
    quizBox.appendChild(enter1);
    
    choice1.addEventListener("click", function(event) {
      event.preventDefault();

      if (questions[i].choices[0] === questions[i].answer) {
        choiceInput.appendChild(correctChoice);
        score++;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      } else {
        choiceInput.appendChild(wrongChoice);
        quizTime = quizTime - 10;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      }
    });

    var choice2 = document.createElement("button");
    choice2.setAttribute("type", "button");
    choice2.setAttribute("class", "btn btn-secondary");
    choice2.textContent = questions[i].choices[1];
    quizBox.appendChild(choice2);
    var enter2 = document.createElement("br");
    quizBox.appendChild(enter2);

    choice2.addEventListener("click", function(event) {
      event.preventDefault();

      if (questions[i].choices[1] == questions[i].answer) {
        choiceInput.appendChild(correctChoice);
        score++;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      } else {
        choiceInput.appendChild(wrongChoice);
        quizTime = quizTime - 10;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      }
    });

    var choice3 = document.createElement("button");
    choice3.setAttribute("type", "button");
    choice3.setAttribute("class", "btn btn-secondary");
    choice3.textContent = questions[i].choices[2];
    quizBox.appendChild(choice3);
    var enter3 = document.createElement("br");
    quizBox.appendChild(enter3);

    choice3.addEventListener("click", function(event) {
      event.preventDefault();

      if (questions[i].choices[2] == questions[i].answer) {
        choiceInput.appendChild(correctChoice);
        score++;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      } else {
        choiceInput.appendChild(wrongChoice);
        quizTime = quizTime - 10;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      }
    });

    var choice4 = document.createElement("button");
    choice4.setAttribute("type", "button");
    choice4.setAttribute("class", "btn btn-secondary");
    choice4.textContent = questions[i].choices[3];
    quizBox.appendChild(choice4);

    choice4.addEventListener("click", function(event) {
      event.preventDefault();

      if (questions[i].choices[3] == questions[i].answer) {
        choiceInput.appendChild(correctChoice);
        score++;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      } else {
        choiceInput.appendChild(wrongChoice);
        quizTime = quizTime - 10;
        quizButton.textContent = "Next";
        nextButton.appendChild(quizButton);
      }
    });

    quizBox.appendChild(choiceInput);
    quizBox.appendChild(nextButton);

    nextButton.addEventListener("click", function(event) {
      event.preventDefault();

      choiceInput.innerHTML = "";
      nextButton.innerHTML = "";

      quizBox.removeChild(choiceInput);
      quizBox.removeChild(nextButton);
    });
  } else {
    quizBox.innerHTML = "";
    var result = document.createElement("p");
    result.textContent = "Final Score: " + score;
    quizBox.appendChild(result);
  }
});

highscoreButton.addEventListener("click", function(event) {
  event.preventDefault();

  quizBox.innerHTML = "";

  quizTime = 0;
  timer.textContent = "Time: 0";

  var highscoreTitle = document.createElement("h2");
  highscoreTitle.setAttribute("class", "text-center");
  highscoreTitle.textContent = "High Scores";
  quizBox.appendChild(highscoreTitle);

  var back = document.createElement("button");
  back.setAttribute("type", "button");
  back.setAttribute("class", "btn btn-secondary");
  back.setAttribute("id", "backButton")
  back.textContent = "Back";
  quizBox.appendChild(back);
  var backButton = document.querySelector("#backButton");
  backButton.addEventListener("click", function(event) {
    event.preventDefault();

    quizBox.innerHTML = "";

    var row1 = document.createElement("div");
    row1.setAttribute("class", "row");
    quizBox.appendChild(row1);

    var row2 = document.createElement("div");
    row2.setAttribute("class", "row");
    quizBox.appendChild(row2);

    var row3 = document.createElement("div");
    row3.setAttribute("class", "row");
    quizBox.appendChild(row3);

    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-md-4");
    row1.appendChild(col1);

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-md-4");
    row1.appendChild(col2);

    var col3 = document.createElement("div");
    col3.setAttribute("class", "col-md-4");
    row1.appendChild(col3);

    var col4 = document.createElement("div");
    col4.setAttribute("class", "col-md-4");
    row2.appendChild(col4);

    var col5 = document.createElement("div");
    col5.setAttribute("class", "col-md-4");
    row2.appendChild(col5);

    var col6 = document.createElement("div");
    col6.setAttribute("class", "col-md-4");
    row2.appendChild(col6);

    var col7 = document.createElement("div");
    col7.setAttribute("class", "col-md-5");
    row3.appendChild(col7);

    var col8 = document.createElement("div");
    col8.setAttribute("class", "col-md-2");
    row3.appendChild(col8);

    var col9 = document.createElement("div");
    col9.setAttribute("class", "col-md-5");
    row3.appendChild(col9);

    var startTitle = document.createElement("h2");
    startTitle.textContent = "Coding Quiz Challenge";
    col2.appendChild(startTitle);

    var startText = document.createElement("p");
    startText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind incorrect answers will penalize your score/time by ten seconds!";
    col5.appendChild(startText);

    col8.appendChild(quizButton);
  });

  var clear = document.createElement("button");
  clear.setAttribute("type", "button");
  clear.setAttribute("class", "btn btn-secondary");
  clear.setAttribute("id", "clearButton");
  clear.textContent = "Clear Highscores";
  quizBox.appendChild(clear);
});