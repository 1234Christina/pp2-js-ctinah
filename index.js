// /** The initial game functions */

/** Event listener to display first quiz question when page loads*/
document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
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

/** Gets a random question from the question bank */
function nextQuestion() {
    // uses math random to generate any question from question bank
    let randomIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[randomIndex];
    return question;
}

/** Random question generated, Displays it to the user */
function displayQuestion() {
    let userQuestion = nextQuestion();
    //console.log ('QUESTION OBJECT: ', userQuestion)
    //console.log ('USER QUESTION: ', userQuestion.question)
    let qDisplay = document.getElementById('currentQuestion');
    //console.log('QUESTION: ', qDisplay)
    qDisplay.innerHTML = userQuestion.question;
}

function trueIsRight() {
    // console.log("Well done!" + " function works");
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = "Well Done! You answered correctly!";
    // console.log(answerDisplay);
};

// trueIsWrong() {

// };

/** Event listener for true button */
pickTrue.addEventListener('click', function() {
    // let answer = answer; //improve this to grab answer object from displayed question
    
    // if (answer === true) {
    //     trueIsRight();
    // } else if (userQuestion.answer === false) {
    //     // a function here to show what the correct answer was
    // } else {
    //     alert('please choose true or false');
    //     console.log('function running');
    // }
    // console.log("pickTrue function works")
})

// falseIsRight() {

// };

// falseIsWrong() {

// };

/** Event listener for False button) */
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