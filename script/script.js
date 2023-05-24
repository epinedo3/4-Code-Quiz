var startBtn = document.getElementById('start');
var quizScreen = document.getElementById('quiz-screen')
var timeEl = document.querySelector(".timer");
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');


var questionArray = [
    {
        question: 'What is 1+1?',
        answer: '2',
        choices: ['1', '2', '3']
    },
    {
        question: 'What is 3*3?',
        answer: '9',
        choices: ['10', '9', '8']
    },
    {

        question: 'What is 10*3?',
        answer: '30',
        choices: ['10', '20', '30']
    },
];

var currentQuestion = 0;

startBtn.addEventListener('click', function(e) {
    document.getElementById('home-screen').classList.add('hide');
    quizScreen.classList.remove('hide');
    startGame()
})

function startGame() {
    startTimer()
    document.getElementById('question').innerText = questionArray[currentQuestion].question;
    document.getElementById('choice-1').innerText = questionArray[currentQuestion].choices[0];
    document.getElementById('choice-2').innerText = questionArray[currentQuestion].choices[1];
    document.getElementById('choice-3').innerText = questionArray[currentQuestion].choices[2];
}
function startTimer(){
    var counter = 60;
    var interval = setInterval(function() {
        console.log(counter);
        counter--;
        timeEl.textContent = counter
        if (counter <= 0){
            clearInterval(interval);
        }
    }, 1000)
}

backButton.addEventListener('click', goBack);
nextButton.addEventListener('click', goNext);
function goBack() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  }
function goNext() {
    if (currentQuestion < pages.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    }
  }

function options(){
    var choices = document.getElementsByClassName('choice');
    console.log('choices', choices)
    for(var i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', function(e){
            console.log('you chose ' + e.target.innerText);
            var chosenAnswer = e.target.innerText
            if(chosenAnswer === questionArray[currentQuestion].answer) {
                console.log('corrrect')
            }
            
        })
    }
}



// write function for checking the answer
// set up high score page
//set up high score functionality
//set up timer