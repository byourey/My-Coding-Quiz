let allQuestions = [
    {
        question: 'What does HTML stand for?',
        option: [
            'Hypher Text Making Language',
            'Hyper Text Markup Language',
            'Hyper Text Making Language',
            'Hyper Text Mark Language',
        ],
        answer: 2,
    },
    {
       question: 'What does CSS stand for?',
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
        answer: 1,
    },
    {
        question: 'Where should css file be referenced in a HTML file?',
        option:[
        'Inside the head section',
        'Inside the body section',
        'Inside the footer section',
        'Inside the external file',
        ],
        answer: 1,
    },
    {
        question: 'What is the HTML tag to make text bold?',
        option:[
        '<b>',
        '<bold>',
        '<strong>',
        '<br>',
        ],
        answer: 1,
    },
    {
        question: 'What is 10 + 2?',
        option:[
        '12',
        '3',
        '224',
        '10',
        ],
        answer: 1,
    
    },
    {
        question: 'What is 222 * 2?',
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
let quest = allQuestions.sort(function(){
return 0.5 - Math.random();
});



const timeLeftDisplay = document.querySelector('#time-left')
const startBtn = document.querySelector('#btn_start')
const nextBtn = document.querySelector('#next_button')
const questionContainerElement = document.getElementById('question-container')
const questionBoxElement = document.querySelector('#questionBox')
const labBoxElement = document.querySelector('#lab')
const subBtn = document.querySelector('#but')
const texBtn = document.querySelector('#myText')
const h3Btn = document.querySelector('#HS')
const goBtn = document.querySelector('#gob')
const clBtn = document.querySelector('#highsc')
const userIn = document.querySelector('#name')
// const endBtn = document.querySelector('#endgame')


var qust = document.getElementById('con')


// Added a timer for the quiz
let timeLeft = 25

// Function get the timer to work
function timeout() {
    setInterval(function(){
     if(timeLeft <=0 ) {
        showResult();
        clearInterval(timeLeft = 0)
     }
     timeLeftDisplay.innerHTML = timeLeft   
     timeLeft -=1;
    }, 1000)
   
}


startBtn.addEventListener("click", timeout)


// Added event listener for the start quiz button
startBtn.addEventListener("click", startQuiz)

// Added event listener for the submitbutton
subBtn.addEventListener("click", endResult)

// Added event listener for the stopquiz
timeLeftDisplay.addEventListener("click", stopQuiz)


// added event listener to show initials submitted earlier
// subBtn.addEventListener("click", formdata)

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
    userIn.classList.add("hide")
}

// nextBtn.addEventListener("click", function(){

startQuestions(index);


// Created a function to start the questions
function startQuestions(i) {    
    
    $(".con").text(quest[i].question);
    $(".questionBox").text(quest[i].question);
     $(".choiceBox span").eq(0).text(quest[i].option[0]);
     $(".choiceBox span").eq(1).text(quest[i].option[1]);
     $(".choiceBox span").eq(2).text(quest[i].option[2]);
     $(".choiceBox span").eq(3).text(quest[i].option[3]);
}

// Created function to check answers
function checkAnswer(option) {
    let optionClicked = $(option).data("opt");
    // console.log(quest[index]);

    // if statement to increase score for a right answer
    if(optionClicked == quest[index].answer) {
        $(option).addClass("correct");
        score+=5;
    }
    // else statement to reduce time when a wrong answer is chosen
    else {
        $(option).addClass("wrong");
         timeLeft = timeLeft - 5;
    }
// Scores to get updated
    $(".results span").text(score);

    $(".choiceBox span").attr("onclick", "");
}


// Function for the next question button clicked
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

// Function show result after quiz is over
function showResult() {
    questionBoxElement.classList.add("hide")
    nextBtn.classList.add("hide")
    subBtn.classList.remove("hide")
    labBoxElement.classList.remove("hide")
    texBtn.classList.remove("hide")
    userIn.classList.remove("hide")

}

// Function when timeLeft is 0 and show the result page
function stopQuiz() {
    timeLeft === 0;
    questionBoxElement.classList.add("hide")
    subBtn.classList.remove("hide")
    labBoxElement.classList.remove("hide")
    userIn.classList.remove("hide")

}

// Function to show Highscores after clicking submit button
function endResult() {
    labBoxElement.classList.add("hide")
    texBtn.classList.add("hide")
    subBtn.classList.add("hide")
    userIn.classList.add("hide")
    h3Btn.classList.remove("hide")
    goBtn.classList.remove("hide")
    clBtn.classList.remove("hide")    
}

// Function save initials when user inputs them

let userInitials = [];

const saveInitials = (ev)=> {
    ev.preventDefault();
    let initials = {
        myText: document.getElementById('myText').value
    }

userInitials.push(initials);

// Saving to local storage
localStorage.setItem("My Initials", JSON.stringify(userInitials));
window.localStorage.getItem('My Initials')
JSON.parse(window.localStorage.getItem('My Initials'))
}

// Added event listener after user enters initials
document.getElementById('but').addEventListener("click", saveInitials)


// Function to display the initials which was submitted earlier
// function formdata() {
// var firstname1= document.getElementById("myText").value;
// document.writeln("<h1>Confirmation Page</h1><br>");
// document.writeln("" + firstname1 + "<br>");
// }

window.localStorage.getItem('save');
JSON.parse(window.localStorage.getItem('My Initials'));



// Function to remove the highscores which was displayed
// function myFunction() {
//     var myobj = document.getElementById('highsc')
//     myobj.remove();
// }



// clear high scores to remove the score
// high scores to display the initials which was entered at the score section





