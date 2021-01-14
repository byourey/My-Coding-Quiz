
let allQuestions = [
    {
        question: '1.What does HTML stand for?',
        option: [
            'Hypher Text Making Language',
            'Hyper Text Markup Language',
            'Hyper Text Making Language',
            'Hyper Text Mark Language',
        ],
        answer: 2,
    },
    {
       question: '2.What does CSS stand for?',
       option: [
        'Common Solution Sheet',
        'Cascading Style Sheet',
        'Cascading Solution Style',
        'Computer Style Sheet',
           ],
        answer: 2,
    },
    {
        question: '3.Which HTML tag is used to define an internal style sheet?',
        option: [
        '<script>',
        '<style>',
        '<html>',
        '<body>',
    ],
        answer: 2,
    },
    {
        question: '4.Which is the correct CSS syntax?',
        option: [
        'body{color:blue}',
        '{body{color:blue}',
        'body={color:blue}',
        'body:color:blue}',
        ],
        answer: 1,
    },
    {
        question: '5.What is 22 + 2?',
        option:[
        '2',
        '3',
        '44',
        '10',
        ],
        answer: 3,
    },
    {
        question: '6.What is 222 + 2?',
        option:[
        '2',
        '3',
        '224',
        '10',
        ],
        answer: 3,
    }
]

const questionContainerElement = document.getElementById('question-container')
const questionBoxElement = document.querySelector('#questionBox')
let index = 0;
let score = 0;
let wrong = 0;
let quest = allQuestions.sort(function(){
return 0.5 - Math.random();
})


// Added a timer for the quiz
const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#btn_start')
const nextBtn = document.querySelector('#next_button')
const scoreBtn = document.querySelector('myText')

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
    scoreBtn.classList.remove("hide")

}

// nextBtn.addEventListener("click", function(){

startQuestions(index);

// Created a function to start the questions
function startQuestions(i) {
     $(".questionBox").text(quest[i].question);
     $(".choiceBox btn").eq(0).text(quest[i].option[0]);
     $(".choiceBox btn").eq(1).text(quest[i].option[1]);
     $(".choiceBox btn").eq(2).text(quest[i].option[2]);
     $(".choiceBox btn").eq(3).text(quest[i].option[3]);
}

// Created function to check answers
function checkAnswer(option) {
    let optionClicked = $(option).data("opt");
    console.log(quest[index]);

    if(optionClicked == quest[index].answer) {
        $(option).addClass("correct");
        score++;
    }
    else {
        $(option).addClass("wrong");
        wrong++;

    }

    $(".choiceBox span").attr("onclick", "");

}

// Function to show the next question
function showNext() {

    if (index >= (quest.length - 1) ) {
        showResult();
        return;    
    }
     index++;

     $(".choiceBox span").attr("onclick", "checkAnswer(this)");

     startQuestions(index);
}

// Function show result
function showResult() {
    questionBoxElement.classList.add("hide")
    scoreBtn.classList.remove("hide")

}

