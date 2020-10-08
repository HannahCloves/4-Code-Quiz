// When clicked, the quiz starts

//When the start button is clicked, it will display the next question and restart button
//Will also hide the start button


 var startButton = document.getElementById("buttonStart");
    startButton.addEventListener('click', function() { 
        var showQuiz = document.getElementById("beginQuiz"); 
        showQuiz.setAttribute("style", "display:block;");
        startButton.style.display = "none";
    })