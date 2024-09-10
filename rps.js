let result = '';
let compMove = '';

let scores = JSON.parse(localStorage.getItem('score'));

if (!scores) {
    scores = {
        compScore: 0,
        userScore: 0
        };
}

// displays score to users
const displayScore = (userMove) => {
    if (userMove === 'reset') {
        document.querySelector('.js-score').innerHTML = 'Score has been reset';
        return;
    }
    document.querySelector('.js-score').innerHTML = `User selects <img src="../images/${userMove}-emoji.png" class="display-move">. Computer selects <img src="../images/${compMove}-emoji.png" class="display-move">. ${result} Score: User: ${scores.userScore} - Computer: ${scores.compScore}`;
}

// code below uses switch to decide winner
const gameplay = (userMove) => {
    if (userMove === 'rock') {
        switch (compMove) {
            case 'rock':
                result = 'It\'s a tie!';
                break;
            case 'paper':
                result = 'Computer wins!';
                scores.compScore++;
                break;
            case 'scissors':
                result = 'User wins!';
                scores.userScore++;
                break;
            default:
                result = null;
        }
    } else if (userMove === 'paper') {
        switch (compMove) {
            case 'rock':
                result = 'User wins!';
                scores.userScore++;
                break;
            case 'paper':
                result = 'It\'s a tie!';
                break;
            case 'scissors':
                result = 'Computer wins!';
                scores.compScore++;
                break;
            default:
                result = null;
        }
    } else {
        switch (compMove) {
            case 'rock':
                result = 'Computer wins!';
                scores.compScore++;
                break;
            case 'paper':
                result = 'User wins!';
                scores.userScore++;
                break;
            case 'scissors':
                result = 'It\'s a tie!';
                break;
            default:
                result = null;
        }
    }
    localStorage.setItem('score', JSON.stringify(scores));
}

// code below uses Math.random() module to pick computer move
function pickComputerMove () {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        compMove = 'rock';
    } else if (randomNum === 1) { 
        compMove = 'paper';
    } else {
        compMove = 'scissors';
    }
}