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

// list of all questions, choices, and answers
var quizQuestions = [
    {
        actualQuizQuestion: "Commonly used data types DO NOT include:",
        optionOne: "strings",
        optionTwo: "booleans",
        optionThree: "alerts",
        optionFour: "numbers",
        answer: "alerts"
    },
    {
        actualQuizQuestion: "The condition in an if / else statement is enclosed within ____.",
        optionOne: "quotes",
        optionTwo: "curly brackets",
        optionThree: "parentheses",
        optionFour: "square brackets",
    answer: "parentheses"
    },
{
    actualQuizQuestion: "Arrays in JavaScript can be used to store ____.",
    optionOne: "numbers and strings",
    optionTwo: "other arrays",
    optionThree: "booleans",
    optionFour:"all of the above",
    answer: "all of the above"
},
{
    actualQuizQuestion: "String values must be enclosed within ____ when being assigned to variables.",
    optionOne: "commas",
    optionTwo: "curly brackets",
    optionThree: "quotes",
    optionFour: "parentheses",
    answer: "quotes"
},
{
    actualQuizQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: {
            optionOne: "JavaScript",
            optionTwo: "terminal / bash",
            optionThree: "for loops",
            optionFour: "console.log",
    answer: "console.log"
}
];

var questionIndex = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    var q = quizQuestions[questionIndex];

    actualQuizQuestion.textContent = q.actualQuizQuestion;

    answerOne.textContent = q.optionOne;
    answerOne.setAttribute("text", "optionOne");
    answerTwo.textContent = q.optionTwo;
    answerTwo.setAttribute("text", q.optionTwo);
    answerThree.textContent = q.optionThree;
    answerThree.setAttribute("text", q.optionThree);
    answerFour.textContent = q.optionFour;
    answerFour.setAttribute("text", q.optionFour);

    console.log(actualQuizQuestion)
    console.log(answerOne)
}



