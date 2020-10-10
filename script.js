// When clicked, the quiz starts

//When the start button is clicked, it will display the next question and restart button
//Will also hide the start button

var count = 60;

var startButton = document.getElementById("buttonStart");
startButton.addEventListener('click', function () {
    var showQuiz = document.getElementById("beginQuiz");
    showQuiz.setAttribute("style", "display:block;");
    startButton.style.display = "none";

    var interval = setInterval(function () {
        document.getElementById('timer').textContent = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('timer').textContent = 'Finished';
            setTimeout(function () {
                alert("You're out of time!");
            }, 0)
        }
    }, 1000);

})

var actualQuizQuestion = document.getElementById("actualQuizQuestion");
var answerOne = document.getElementById("optionOne");
var answerTwo = document.getElementById("optionTwo");
var answerThree = document.getElementById("optionThree");
var answerFour = document.getElementById("optionFour");
var markedAnswer = document.getElementById("markedAnswer");

// list of all questions, choices, and answers
var quizQuestions = [
    {
        actualQuizQuestion: "Commonly used data types DO NOT include:",
        optionOne: "Strings",
        optionTwo: "Booleans",
        optionThree: "Alerts",
        optionFour: "Numbers",
        answer: "Alerts"
    },
    {
        actualQuizQuestion: "The condition in an if / else statement is enclosed within ____.",
        optionOne: "Quotes",
        optionTwo: "Curly Brackets",
        optionThree: "Parentheses",
        optionFour: "Square Brackets",
        answer: "Parentheses"
    },
    {
        actualQuizQuestion: "Arrays in JavaScript can be used to store ____.",
        optionOne: "Numbers and Strings",
        optionTwo: "Other Arrays",
        optionThree: "Booleans",
        optionFour: "All of the above",
        answer: "All of the above"
    },
    {
        actualQuizQuestion: "String values must be enclosed within ____ when being assigned to variables.",
        optionOne: "Commas",
        optionTwo: "Curly brackets",
        optionThree: "Quotes",
        optionFour: "Parentheses",
        answer: "Quotes"
    },
    {
        actualQuizQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
        optionOne: "JavaScript",
        optionTwo: "Terminal / Bash",
        optionThree: "For Loops",
        optionFour: "console.log",
        answer: "console.log"
    }];

var questionIndex = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    var q = quizQuestions[questionIndex];
    actualQuizQuestion.textContent = q.actualQuizQuestion;
    answerOne.textContent = q.optionOne;
    answerOne.setAttribute("text", "optionOne");
    answerTwo.textContent = q.optionTwo;
    answerTwo.setAttribute("text", "optionTwo");
    answerThree.textContent = q.optionThree;
    answerThree.setAttribute("text", "optionThree");
    answerFour.textContent = q.optionFour;
    answerFour.setAttribute("text", "optionFour");

    answerOne.addEventListener('click', nextQuestion)
    answerTwo.addEventListener('click', nextQuestion)
    answerThree.addEventListener('click', nextQuestion)
    answerFour.addEventListener('click', nextQuestion)


    function nextQuestion(event) {
        if (event.target.innerText === quizQuestions[questionIndex].answer) {
            markedAnswer.textContent = "Nice one!"
        } else
            markedAnswer.textContent = "Unlucky! -10 to your time."
        count -= 10
        if (count < 0) {
            count = 0;
        }
        questionIndex++;
        startQuiz();
    }

};


