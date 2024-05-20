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


    // Add as many as possible
]

/** Gets a random question from the question bank */
function nextQuestion() {
    // uses math random to generate any question from question bank
    let randomIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[randomIndex];
    // clear the answer display paragraph?
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
    return userQuestion;
}

function trueIsRight() {
    // console.log("Well done!" + " function works");
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = "Well Done! You answered correctly!";
    // console.log(answerDisplay.textContent);
};

function trueIsWrong() {
    let answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = `The correct answer is ${answer.correctAnswer}`; //Display correct answer
    //alert("it works");
};

/** Event listener for true button */
pickTrue.addEventListener('click', function() {
    let answer = displayQuestion().answer; //improve this to grab answer object from displayed question
    
    if (answer === true) {
        // a function here to tell the user they got the answer right
        trueIsRight();
    } else if (answer === false) {
        // a function here to show what the correct answer was
        trueIsWrong();
    }
    console.log("pickTrue function works");
})

function falseIsRight() {
    console.log("false is right");
};

function falseIsWrong() {
    console.log("false is wrong");
};

/** Event listener for False button) */
pickFalse.addEventListener('click', function() {
    let answer = displayQuestion().answer; //improve this to grab answer object from displayed question
    
    if (answer === true) {
        
        falseIsWrong();
    } else if (answer === false) {
        
        falseIsRight();
    }
    console.log("pickFalse function works");
})

// When question has been answered move to this function
// nextQuestionBtn() {

// };

// When user answer is confirmed as right (bool true) run this to track right answers out of total questions
// addRightAnswers() {

// };

// When all questions have been answered move to this funtion
// showRightAnswers() {

// };