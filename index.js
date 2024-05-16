// /** The initial game functions */

// When page loads do this
document.addEventListener('DOMContentLoaded', function() {
    let gameButtons = document.getElementsByTagName('button');

    for (let buttons of gameButtons) {
        buttons.addEventListener('click', function() {
            alert("The page works!");
        }) 
        
    }
});

// A question bank to store all the possible questions in the game

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

// trueIsRight() {

// };

// trueIsWrong() {

// };

// When True is clicked do this
//

// falseIsRight() {

// };

// falseIsWrong() {

// };

// When False is clicked do this
//


// When user answer is confirmed as right (bool true) run this to track right answers out of total questions
// addRightAnswers() {

// };

// When question has been answered move to this function
// nextQuestionBtn() {

// };

// When all questions have been answered move to this funtion
// showRightAnswers() {

// };