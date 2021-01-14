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
        question: '5Wwhere should css file be referenced in a HTML file?',
        option:[
        'Inside the head section',
        'Inside the body section',
        'Inside the footer section',
        'Inside the external file',
        ],
        answer: 1,
    },
    {
        question: '6.What is the HTML tag to make text bold?',
        option:[
        '<b>',
        '<bold>',
        '<strong>',
        '<br>',
        ],
        answer: 1,
    },
    {
        question: '7.What is 10 + 2?',
        option:[
        '12',
        '3',
        '224',
        '10',
        ],
        answer: 1,
    
    },
    {
        question: '8.What is 222 * 2?',
        option:[
        '2',
        '444',
        '224',
        '10',
        ],
        answer: 2,
    }

]


let index = 0;
let score = 0;
let wrong = 0;
let quest = allQuestions.sort(function(){
return 0.5 - Math.random();
});



const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#btn_start')
const nextBtn = document.querySelector('#next_button')
const scoreBtn = document.querySelector('myText')
const questionContainerElement = document.getElementById('question-container')
const questionBoxElement = document.querySelector('#questionBox')
const labBoxElement = document.querySelector('#lab')
const subBtn = document.querySelector('#but')
const texBtn = document.querySelector('#myText')
const h3Btn = document.querySelector('#HS')
const goBtn = document.querySelector('#gob')
const clBtn = document.querySelector('#cl')


// Added a timer for the quiz
let timeLeft = 10

// Function get the timer to work
function timeout() {
    setInterval(function(){
     if(timeLeft <=1 ) {
        showResult();
        clearInterval(timeLeft = 1)
     }
     timeLeftDisplay.innerHTML = timeLeft   
     timeLeft -=1
    }, 1000)
   
}
startBtn.addEventListener("click", timeout)

// Added event listener for the start quiz button
startBtn.addEventListener("click", startQuiz)

// Added event listener for the submitbutton
subBtn.addEventListener("click", endResult)

// added event listener for the go backbutton
goBtn.addEventListener("click", startQuiz)

// added event listener for the clear highscoresbutton
// clBtn.addEventListener("click", empty())

// Added a function for what should happen after clicking the start button
function startQuiz() {
    startBtn.classList.add("hide")
    timeLeftDisplay.classList.remove("hide")
    nextBtn.classList.remove("hide")
    questionContainerElement.classList.add("hide")
    questionBoxElement.classList.remove("hide")
    subBtn.classList.add("hide")
    labBoxElement.classList.add("hide")
    texBtn.classList.add("hide")
    clBtn.classList.add("hide")
}

// nextBtn.addEventListener("click", function(){

startQuestions(index);

// Created a function to start the questions
function startQuestions(i) {
     $(".questionBox").text(quest[i].question);
     $(".choiceBox span").eq(0).text(quest[i].option[0]);
     $(".choiceBox span").eq(1).text(quest[i].option[1]);
     $(".choiceBox span").eq(2).text(quest[i].option[2]);
     $(".choiceBox span").eq(3).text(quest[i].option[3]);
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

    //  Added this code to remove right and wrong class from options
     $(".choiceBox span").removeClass();
     
    //  Added click attribute on the next question event
     $(".choiceBox span").attr("onclick", "checkAnswer(this)");

     startQuestions(index);
}

// Function show result
function showResult() {
    questionBoxElement.classList.add("hide")
    nextBtn.classList.add("hide")
    subBtn.classList.remove("hide")
    labBoxElement.classList.remove("hide")
    texBtn.classList.remove("hide")
}

// Function to show Highscores after clicking submit button
function endResult() {
    texBtn.classList.add("hide")
    subBtn.classList.add("hide")
    h3Btn.classList.remove("hide")
    goBtn.classList.remove("hide")
    clBtn.classList.remove("hide")
    labBoxElement.classList.add("hide")
}


// Function to start the quiz again when clicking the go back button
goBtn.classList.add("hide")
clBtn.classList.remove("hide")
h3Btn.classList.add("hide")



