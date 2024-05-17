// /** The initial game functions */

/** When page loads add event listener to display first quiz question*/
document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
    // let gameButtons = document.getElementsByTagName('button');
    // for (let buttons of gameButtons) {
    //     buttons.addEventListener('click', function() {
    //         alert("The page works!");
    //     }) 
        
    // }

});

// A constant variable for each button
const nextQuestionButton = document.getElementById('goToNextQuestion');
const pickTrue = document.getElementById('true');
const pickFalse = document.getElementById('false');

 /** When next question button is clicked, run the function to display a new question */
 nextQuestionButton.addEventListener('click', function() {
    displayQuestion();
})

/** A question bank to store all the possible questions in the game */

const questionBank = [
    {
        'question': 'The main character is called Lincoln Loud?',
        'answer': true
    },
    {
        'question': 'Lincoln Loud has ten sisters?',
        'answer': true
    },
    {
        'question': 'Lola and Lana are twin sisters?',
        'answer': true
    },
    {
        'question': 'Lincoln and Clyde are twin brothers?',
        'answer': false //best friends
    },
    {
        'question': 'Lucy Loud is the eldest sister?',
        'answer': false //Lori is eldest sister
    }

    // Add as many as possible
]

/** Begin by getting a random question from the question bank */
function nextQuestion() {
    // use math random to generate any question from bank
    let randomIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[randomIndex];
    return question;
}

/** Random question generated, now display it to the user */
function displayQuestion() {
    let userQuestion = nextQuestion();
    //console.log ('QUESTION OBJECT: ', userQuestion)
    //console.log ('USER QUESTION: ', userQuestion.question)
    let qDisplay = document.getElementById('currentQuestion');
    //console.log('QUESTION: ', qDisplay)
    qDisplay.innerHTML = userQuestion.question;

    //document.body.appendChild(qDisplay);
}

function trueIsRight() {
    console.log("Well done!" + " function works");

};

// trueIsWrong() {

// };

/** When True is clicked do this (this is the event listener for true button) */
pickTrue.addEventListener('click', function() {
    // let answer = .answer; //improve this to grab answer object from displayed question
    // if (answer === true) {
    //     trueIsRight();
    // // } else if (userQuestion.answer === false) {
    // //     // a function here to show what the correct answer was
    // } else {
    //     alert('please choose true or false');
    //     console.log('function running');
    // }
    console.log("pickTrue function works")
})

// falseIsRight() {

// };

// falseIsWrong() {

// };

/** When False is clicked do this (this is the event listener for False button) */
pickFalse.addEventListener('click', function() {
    console.log("pickFalse function works")
})


// When user answer is confirmed as right (bool true) run this to track right answers out of total questions
// addRightAnswers() {

// };

// When question has been answered move to this function
// nextQuestionBtn() {

// };

// When all questions have been answered move to this funtion
// showRightAnswers() {

// };