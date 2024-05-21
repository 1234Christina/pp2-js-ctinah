// /** The initial game functions */

/** Event listener to display first quiz question when page loads*/
document.addEventListener('DOMContentLoaded', function() {
    displayNextQuestion();
});

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
        'answer': false,
        'correctAnswer': 'Linclon and Clyde are best friends!'
    },
    {
        'question': 'Lucy Loud is the eldest sister?',
        'answer': false,
        'correctAnswer': 'Lori Loud is the eldest sister!'
    },
    {
        'question': 'Mr Grouse is the Loud family\'s next door neighbour?',
        'answer': true
    },
    {
        'question': 'Lisa Loud enjoys beauty pageants?',
        'answer': false,
        'correctAnswer': 'Lisa enjoys science!'
    },
    {
        'question': 'Lynn Loud is the sporty one?',
        'answer': true
    },
    {
        'question': 'Luanne Loud is the musical one?',
        'answer': false,
        'correctAnswer': 'Luanne is the comedian!'
    },
    {
        'question': 'Lincoln\'s youngest sister is called Lily?',
        'answer': true
    },
    {
        'question': 'Lana has a pet frog named Hops?',
        'answer': true
    },
    {
        'question': 'Lucy and Luna are twin sisters?',
        'answer': false,
        'correctAnswer': 'Luna is older than Lucy!'
    }
];

// A constant variable for True and False buttons
const pickTrue = document.getElementById('true');
const pickFalse = document.getElementById('false');

// A variable for the answer display paragraph
let answerDisplay = document.getElementById('answerDisplay');

/** Gets a random question from the question bank */
function nextQuestion() {
    // uses math random to generate any question from question bank
    let randomIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[randomIndex];
    // clear the answer display paragraph?
    return question;
}

/** Random question generated, Displays it to the user */
function displayNextQuestion() {
    let userQuestion = nextQuestion();
    let qDisplay = document.getElementById('currentQuestion');
    qDisplay.innerHTML = userQuestion.question;
    // set attribute on qDisplay paragraph
    qDisplay.setAttribute('data-answer', 'false');
    return userQuestion;
}

/** When skip question button is clicked, run the function to display a new question */
const nextQuestionButton = document.getElementById('goToNextQuestion');
nextQuestionButton.addEventListener('click', function() {
    displayNextQuestion();
});

/** Functions to run when True button is clicked */
function trueIsRight() {
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = "Well Done! You answered correctly!";
}

function trueIsWrong(correctAnswer) {
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = `The correct answer is ${correctAnswer}`; //Display correct answer
}

/** Event listener for true button */
pickTrue.addEventListener('click', function() {
    let question = displayNextQuestion();
    let answer = question.answer; //improve this to grab answer object from displayed question
    let correctAnswer = question.correctAnswer;
    
    if (answer === true) {
        // a function here to tell the user they got the answer right
        trueIsRight();
    } else if (answer === false) {
        // a function here to show what the correct answer was
        trueIsWrong(correctAnswer);
    }
    /** Wait 1 second before displaying the next question */
    setTimeout(displayNextQuestion(), 1000);
});

/** Functions to run when False button is clicked */
function falseIsRight() {
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = "Well Done! You answered correctly!";
}

function falseIsWrong(answer) {
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = `This is ${answer}!`;
}

/** Event listener for False button) */
pickFalse.addEventListener('click', function() {
    let question = displayNextQuestion();
    let answer = question.answer; //improve this to grab answer object from displayed question
    
    if (answer === true) {
        // a function here to tell the user that False is wrong
        falseIsWrong(answer);
    } else if (answer === false) {
        // a function here to tell the user they picked the right answer
        falseIsRight();
    }
    /** Wait 1 second before displaying the next question */
    setTimeout(displayNextQuestion(), 1000);
});