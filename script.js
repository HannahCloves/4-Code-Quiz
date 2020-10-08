// When clicked, the quiz starts

//When the start button is clicked, it will display the next question and restart button
//Will also hide the start button

 
var startButton = document.getElementById("buttonStart");
    startButton.addEventListener('click', function() { 
    var showQuiz = document.getElementById("beginQuiz"); 
        showQuiz.setAttribute("style", "display:block;");
        startButton.style.display = "none";
    })

startButton.addEventListener('click', function() { 
    var count = 60;
    var interval = setInterval(function () {
        document.getElementById('timer').textContent = count;
            count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('timer').textContent = 'Done';
                alert("You're out of time!");
            }
        }, 1000);
    })

    var questionsObject
    