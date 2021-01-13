
let allQuestions = [
    {
        question:'What does CSS stand for?',
        option: [
        'Common Solution Sheet',
        'Cascading Style Sheet',
        'Cascading Solution Style',
        'Computer Style Sheet',
           ],
        answer: 2,
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        option: [
        '<script>',
        '<style>',
        '<html>',
        '<body>',
    ],
        answer: 2,
    },
    {
        question: 'Which is the correct CSS syntax?',
        option: [
        'body{color:blue}',
        '{body{color:blue}',
        'body={color:blue}',
        'body:color:blue}',
        ],
        answer: 2,
    },
    {
        question: 'What is 22 + 2?',
        option:[
        '2',
        '3',
        '4',
        '10',
        ],
        answer: 2,
    },
    {
        question: 'What is 222 + 2?',
        option:[
        '2',
        '3',
        '4',
        '10',
        ],
        answer: 2,
    }
]

const questionContainerElement = document.getElementById('question-container')
const questionBoxElement = document.querySelector('#questionBox')
let index = 0;
let quest = allQuestions.sort(function(){
return 0.5 - Math.random();
})


// Added a timer for the quiz
const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#btn_start')
const nextBtn = document.querySelector('#next_button')

let timeLeft = 60

function timeout() {
    setInterval(function(){
     if(timeLeft <=0 ) {
         clearInterval(timeLeft = 0)
     }
     timeLeftDisplay.innerHTML = timeLeft   
     timeLeft -=1
    }, 1000)
   
}
startBtn.addEventListener("click", timeout)

// Added event listener for the start quiz button
startBtn.addEventListener("click", startQuiz)

// Added a function for what should happen after clicking the start button
function startQuiz() {
    startBtn.classList.add("hide")
    timeLeftDisplay.classList.remove("hide")
    nextBtn.classList.remove("hide")
    questionContainerElement.classList.add("hide")
    questionBoxElement.classList.remove("hide")
}

// nextBtn.addEventListener("click", function(){

startQuestions(index);

// Created a function to start the questions
function startQuestions(i) {
     $(".questionBox").text(quest[i].question);
     $(".optionBox btn").eq(0).text(quest[i].option[0]);
     $(".optionBox btn").eq(1).text(quest[i].option[1]);
     $(".optionBox btn").eq(2).text(quest[i].option[2]);
     $(".optionBox btn").eq(3).text(quest[i].option[3]);
}


