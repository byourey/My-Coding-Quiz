// // // Added event listener to start quiz button
// var startButton = document.querySelector("#btn");

// startButton.addEventListener("click", function(e){
//     console.log(e.target);
//     console.log(e);
// research the methods to set and remove attributes. and put this in variable.
// })

// var document.getElementById("questions", )

// setInterval(function, 1000)

const startButton = document.getElementById("btn-start")
const questionsEl = document.querySelector(".ques")
startButton.addEventListener("click", startQuiz)
// function to start the quiz, function to bring in the questions.
function startQuiz() {
console.log('started')
startButton.classList.add('hide')
questionsEl.classList.remove('hide')
}

// // function to move on to the next question
// function nextQuestion() {

// }
// // function to reduce time when a question is answered incorrectly.
// // create a function to display if answer is right
// // create a function to add points 
// // function to start the Time
// function startTime() {
//     timer = setInterval(function() {
//         timeCount--;
//         timeElement.textContent = timeCount;
//         if (timeCount >=0) {

//         }
//     }
// }

// to end the Game
// to enter initials (another div to create and is hidden till gave is over)
// display the Score (another div to create and is hidden till gave is over) put them below questions div

// some document,getElementById maybe globalT 
// use regular functions




