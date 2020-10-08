// When clicked, the quiz starts

//When the start button is clicked, it will display the next question and restart button
//Will also hide the start button
    function startQuiz(){
        var showQuiz = document.getElementById("beginQuiz"); 
        showQuiz.setAttribute("style", "display:block;");
        var startButton = document.getElementById("buttonStart");
        startButton.style.display = "none";
    }

    