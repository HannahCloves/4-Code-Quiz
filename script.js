// list of all questions, choices, and answers
var quizQuestions = [
    {
        actualQuizQuestion: "Commonly used data types DO NOT include:",
        optionOne: "Strings",
        optionTwo: "Booleans",
        optionThree: "Alerts",
        optionFour: "Numbers",
        answer: "Alerts",
    },
    {
        actualQuizQuestion:
            "The condition in an if / else statement is enclosed within ____.",
        optionOne: "Quotes",
        optionTwo: "Curly Brackets",
        optionThree: "Parentheses",
        optionFour: "Square Brackets",
        answer: "Parentheses",
    },
    {
        actualQuizQuestion: "Arrays in JavaScript can be used to store ____.",
        optionOne: "Numbers and Strings",
        optionTwo: "Other Arrays",
        optionThree: "Booleans",
        optionFour: "All of the above",
        answer: "All of the above",
    },
    {
        actualQuizQuestion:
            "String values must be enclosed within ____ when being assigned to variables.",
        optionOne: "Commas",
        optionTwo: "Curly brackets",
        optionThree: "Quotes",
        optionFour: "Parentheses",
        answer: "Quotes",
    },
    {
        actualQuizQuestion:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        optionOne: "JavaScript",
        optionTwo: "Terminal / Bash",
        optionThree: "For Loops",
        optionFour: "console.log",
        answer: "console.log",
    },
];

//List of all the variables
var showQuiz = document.getElementById("beginQuiz");
var startButton = document.getElementById("startingPage");
var actualQuizQuestion = document.getElementById("actualQuizQuestion");
var answerOne = document.getElementById("optionOne");
var answerTwo = document.getElementById("optionTwo");
var answerThree = document.getElementById("optionThree");
var answerFour = document.getElementById("optionFour");
var markedAnswer = document.getElementById("markedAnswer");
var time = quizQuestions.length * 15;
var timerId;
var timerEl = document.getElementById("timer");
var highscores = document.getElementById("highscores");
var clearHighScore = document.getElementById("clear")
var questionIndex = 0;
var startingScore = 0;
var submitButton = document.getElementById("submit")
var initialsInput = document.getElementById('initialsInput')

//button click loads the "start quiz"
startButton.addEventListener("click", startQuiz);

//start of the quiz
function startQuiz() {
    showQuiz.style.display = "block";
    startButton.style.display = "none";


    // start timer
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;
    startQuestions();
}

// Sets the content for the question/answer variables
function startQuestions() {
    var q = quizQuestions[questionIndex];
    actualQuizQuestion.textContent = q.actualQuizQuestion;
    answerOne.textContent = q.optionOne;
    answerOne.setAttribute("text", "optionOne");
    answerOne.setAttribute("value", q.optionOne);
    answerTwo.textContent = q.optionTwo;
    answerTwo.setAttribute("text", "optionTwo");
    answerTwo.setAttribute("value", q.optionTwo);
    answerThree.textContent = q.optionThree;
    answerThree.setAttribute("text", "optionThree");
    answerThree.setAttribute("value", q.optionThree);
    answerFour.textContent = q.optionFour;
    answerFour.setAttribute("text", "optionFour");
    answerFour.setAttribute("value", q.optionFour);

    answerOne.addEventListener("click", nextQuestion);
    answerTwo.addEventListener("click", nextQuestion);
    answerThree.addEventListener("click", nextQuestion);
    answerFour.addEventListener("click", nextQuestion);
}

//When a "answer" is clicked, the below validation will run to check whether its correct or not
//If correct, the score will increment by 1
//If incorrect the timer will take a 10 second penalty
//Then the next question will be immediately shown
//When the loop has reached the final question, it will execute endQuiz
function nextQuestion() {
    if (this.value === quizQuestions[questionIndex].answer) {
        markedAnswer.textContent = "Nice one!";
        startingScore++;
    } else {
        markedAnswer.textContent = "Unlucky! -10 to your time.";
        time -= 10;
    }
    if (time < 0) {
        time = 0;
    }
    questionIndex++;
    if (questionIndex > 4) {
        endQuiz();
    } else {
        startQuestions();
    }
}

//This stops the timer, hides the questions and displays the final score 
function endQuiz() {
    clearInterval(timerId);

    finalFeedback.setAttribute("style", "display:block;");
    showQuiz.setAttribute("style", "display:none");
    var finalScoreSection = document.getElementById("finalFeedback");
    finalScoreSection.removeAttribute("class");
    var score = document.getElementById("score");
    score.textContent = "You scored:" + startingScore;
    showHighscores();
}

//timer function, when clock runs to 0, game over
function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        endQuiz();
    }
}

//When the user clicks submit, their initials are processed through savenewhighscore and show highscores
submitButton.addEventListener('click', function () {
    var initials = initialsInput.value.trim();
    saveNewHighscores(initials);
    showHighscores();
})

//stores the highscores and initials into local storage
function saveNewHighscores(initials) {
    var storedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var myScore = {
        score: startingScore,
        name: initials,
    };
    storedScores.push(myScore);
    window.localStorage.setItem("highscores", JSON.stringify(storedScores));
}

//pulls the highscores back out of local storage and displays them on screen
function showHighscores() {
    var storedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var fullScoresList = document.getElementById("highscoresList");
    fullScoresList.innerHTML = "";

    storedScores.forEach(function (score) {
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = score.name + " - " + score.score;
        fullScoresList.appendChild(scoreEntry);
    });
        highscores.setAttribute("style", "display:block;");
    }

//Clears highscore storage and list on screen
clearHighScore.addEventListener("click", function () {
        localStorage.clear();
        showHighscores()
    })