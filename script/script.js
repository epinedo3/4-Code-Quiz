var startBtn = document.getElementById('start');
var quizScreen = document.getElementById('quiz-screen')
var timeEl = document.querySelector(".timer");
var choiceList = document.getElementById('choiceList');
var scores = document.getElementById('scores');
var highScoresSection = document.getElementById('high-scores-section')
var playerInitials = document.querySelector("#player-initials");
var playAgainButton = document.querySelector("#play-again-button");
var highScoresButton = document.getElementById('high-scores-button');
var submitScoreButton = document.querySelector("#submit-score-button");

var counter = 60;

var questionArray = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer: '<script>',
        choices: ['<scripting>', '<script>', '<js>']
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answer: 'Both the <head> section and the <body> section are correct',
        choices: ['The <head> section', 'Both the <head> section and the <body> section are correct', 'The <body> section']
    },
    {

        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answer: '<script src="xxx.js">',
        choices: ['<script src="xxx.js">', '<script name="xxx.js">','<script href="xxx.js">']
    },
    {

        question: 'The external JavaScript file must contain the <script> tag.',
        answer: 'True',
        choices: ['True', 'False','None of the above']
    },
    {

        question: 'How do you create a function in JavaScript?',
        answer: 'function myFunction()',
        choices: ['function:myFunction()', 'function = myFunction()', 'function myFunction()']
    },
];
var currentQuestion = 0;

startBtn.addEventListener('click', function(e) {
    document.getElementById('home-screen').classList.add('hide');
    quizScreen.classList.remove('hide');
    startGame()
})

function startGame() {
    startTimer();
    setQuestion();
}

function startTimer(){
    counter = 60;
    var interval = setInterval(function() {
        counter--;
        timeEl.textContent = "Time Left: "+ counter
        if (counter === 0 || counter < 0 || currentQuestion === 5 ){
            clearInterval(interval);
            endGame();
        }
    }, 1000)
}

function setQuestion(){
    if( currentQuestion<5 ){
    document.getElementById('question').innerText = questionArray[currentQuestion].question;
    document.getElementById('choice-1').innerText = questionArray[currentQuestion].choices[0];
    document.getElementById('choice-2').innerText = questionArray[currentQuestion].choices[1];
    document.getElementById('choice-3').innerText = questionArray[currentQuestion].choices[2]; 
    } 
    else{
        document.querySelector(".score-section").classList.remove('hide');
        document.querySelector("#quiz-screen").classList.add('hide');
    } 
}

choiceList.addEventListener('click', function(event){
    console.log(event.target)
    console.log('you chose ' + event.target.innerText);
            var chosenAnswer = event.target.innerText
            if(chosenAnswer === questionArray[currentQuestion].answer) {
                console.log('corrrect');
                currentQuestion ++;
                setQuestion();
            }
            else {
                counter = counter - 10;
            }
})

function endGame(){
    console.log('running endGame');
    startBtn.disabled = true;
    document.querySelector(".high-score-section").classList.remove('hide');
    quizScreen.classList.add('hide');
    var pab = document.querySelector("#play-again-button");
    pab.classList.remove('hide');
    document.getElementById("high-scores-button").classList.remove('hide');
    var navbar = document.querySelector("#navbar");
    navbar.classList.remove('hide');
}

function saveScores(){
    var oldScores = JSON.parse(localStorage.getItem("high-score"));
    console.log(oldScores);
    var allScoresArray = [];
    var username = playerInitials.value;
    if (playerInitials === ""){
        alert("Type in your Initials")
        return;
    }
    console.log(username);
    var player = {initials: username, score: counter};
    console.log(player);
    // if theres no data in local storage
    if(!oldScores){
        // send current player highscore to local storage
        allScoresArray.push(player);
        localStorage.setItem("high-score", JSON.stringify(allScoresArray));
    }
    // if there IS data in local storage
    if(oldScores){
        // set scores in order
        // add new scores
        oldScores.push(player)
        console.log(oldScores)
        // discplay scores on screen
        // reset oldScores in local storage
    }
}

submitScoreButton.addEventListener('click', saveScores);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// array push for oldscores + player
// set up high score page with for loop for every item inside the highscores

