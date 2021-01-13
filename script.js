// // // Added event listener to start quiz button


// const option1 = document.querySelector("option1");
// const option2 = document.querySelector("option2");
// const option3 = document.querySelector("option3");
// const option4 = document.querySelector("option4");

// const next_question = document.querySelector(".next_button");


// start.addEventListener("click", ()=>{
//     start.style.display = "none";
//     rules.style.display = "block";
// })

const questionContainerElement = document.getElementById('question-container')
const questionBoxElement = document.querySelector('#questionBox')

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

startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    startBtn.classList.add("hide")
    timeLeftDisplay.classList.remove("hide")
    nextBtn.classList.remove("hide")
    questionContainerElement.classList.add("hide")
    questionBoxElement.classList.remove("hide")
}

// nextBtn.addEventListener("click", function(){





// var document.getElementById("questions", )


// const startButton = document.getElementById("btn-start");
// const questionsEl = document.querySelector(".ques");
// const quizBox = document.querySelector(".box");
// // startButton.addEventListener("click", startQuiz)

// function to start the quiz, function to bring in the questions.
// function startQuiz() {
// console.log('started')
// // startButton.classList.add('hide')
// // questionsEl.classList.remove('hide')
// // setNextQues()
// }



// // function to reduce time when a question is answered incorrectly.
// // create a function to display if answer is right
// // create a function to add points 
// 

// to end the Game
// to enter initials (another div to create and is hidden till gave is over)
// display the Score (another div to create and is hidden till gave is over) put them below questions div

// some document,getElementById maybe globalT 
// use regular functions

// let allQuestions = [
//     {
//         question:'What does HTML stand for?',
//         choice1:'Hypher Text Making Language',
//         choice2:'Hyper Text Markup Language',
//         choice3:'Hyper Text Making Language',
//         choice4:'Hyper Text Mark Language',
//         answer: 2,
//     },
//     {
//         question: 'Which HTML tag is used to define an internal style sheet?',
//         choice1:'<script>',
//         choice2:'<style>',
//         choice3:'<html>',
//         choice4:'<body>',
//         answer: 2,
//     },
//     {
//         question: 'Which is the correct CSS syntax?',
//         choice1:'body{color:blue}',
//         choice2:'{body{color:blue}',
//         choice3:'body={color:blue}',
//         choice4:'body:color:blue}',
//         answer: 2,
//     },
// //     {
// //         question: 'What is 22 + 2?',
// //         choice1:'2',
// //         choice2:'3',
// //         choice3:'4',
// //         choice4:'10',
// //         answer: 2,
// //     },
// //     {
// //         question: 'What is 222 + 2?',
// //         choice1:'2',
// //         choice2:'3',
// //         choice3:'4',
// //         choice4:'10',
// //         answer: 2,
// //     }
// // ]




