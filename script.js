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
            setTimeout(function(){
            alert("You're out of time!");
            },0)
        }
    }, 1000);
})


var questionsObj = [
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
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];