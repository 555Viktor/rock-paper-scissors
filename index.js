// DOM Elements - element type specified at the end
let selectChoiceBtns = document.querySelectorAll('.btnSelectRps'); 
let restartGameBtn = document.querySelector('#btnRestart');

let playerChoiceImg = document.querySelector('#playerChoiceImg'); 
let computerChoiceImg = document.querySelector('#computerChoiceImg')

let scoreAnnouceHeader = document.querySelector('#headerAnounce')
let playerScoreSpan = document.querySelector('#playerScore');
let computerScoreSpan = document.querySelector('#computerScore');

// Score variables to be incremented on winning
let playerScore = 0;
let computerScore = 0;

// Variables to declare and track rounds
const maxRounds = 5;
let elapsedRounds = 0;

// Paper/Rock/Scissors string values in arr 
// Use to select choice
let choicesArr = ['rock', 'paper', 'scissors'];

// Phrases to announce round outcome

const winPhrases = [
    "You won! Great job!",
    "Victory!",
    "Another win!",
    "Smart move!",
    "You did it! Nice win!"
];

const losePhrases = [
    "The computer won.",
    "Tough luck!",
    "The bot outplayed you!",
    "Not this time!",
    "You can do better."
];

const drawPhrases = [
    "It's a draw!",
    "A tie! Both played well.",
    "No winner this time.",
    "Stalemate!",
    "We have a draw!",
    "Draw!"
];

// Computer move functions

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * choicesArr.length);
    let computerChoice = choicesArr[randomNum];

    return computerChoice;
}

function displayComputerChoice (choice) {
    computerChoiceImg.src = `./images/${choice}-icon.png`;
    computerChoiceImg.classList.replace('default-img', 'display-choice-img');
}

// Player move functions

function getPlayerChoice (btn) {
    let playerChoice = btn.id;

    return playerChoice;
}

function displayPlayerChoice (choice) {
    playerChoiceImg.src = `./images/${choice}-icon.png`;
    playerChoiceImg.classList.replace('default-img', 'display-choice-img');
}

// Increment elapsedRounds based on maxRounds
function trackElapsedRounds () {
    if (elapsedRounds < maxRounds) elapsedRounds++; 
}

// Function to update score and output round winner as string
function decideRoundWinner (playerChoice, computerChoice) {
    let winner;

    if(playerChoice === computerChoice) {
        winner = null;
        scoreAnnouceHeader.textContent = getRandomPhrase(drawPhrases);
    } 
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winner = 'player';
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        winner = 'player';
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winner = 'player';
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
    } else {
        winner = 'computer';
        computerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(losePhrases);
    }

    return winner;
}


// Score management functions
function displayScore () {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function resetScore () {
    playerScore = 0;
    computerScore = 0;
    
    displayScore()
}

// Function to output random phrase based on round outcome
function getRandomPhrase (arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    
    return arr[randomNum];
}

// Function to output and display game winner after maxRounds reached
function getGameWinner (playerScore, computerScore) {
    let gameWinner;

    if (playerScore > computerScore) gameWinner = 'player';
    else gameWinner = 'computer';

    return gameWinner;
}

function displayGameWinner (gameWinner) {
    let message;

    if (gameWinner === 'player') message = 'Player wins the game!';
    else message = 'Computer wins the game!';

    scoreAnnouceHeader.textContent = message;
}

// Function to reset game variable values and page UI to default
function restartGame () {
    resetScore();
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;

    elapsedRounds = 0;

    scoreAnnouceHeader.textContent = 'Total Score'

    computerChoiceImg.src = './images/question-mark-icon.png';
    playerChoiceImg.src =  './images/question-mark-icon.png';

    computerChoiceImg.classList.replace('display-choice-img','default-img');
    playerChoiceImg.classList.replace('display-choice-img','default-img');
}
// Initial setup

selectChoiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        if (elapsedRounds >= maxRounds) {
            return;
        }

        let playerChoice = getPlayerChoice(btn);
        let computerChoice = getComputerChoice();

        displayPlayerChoice(playerChoice);
        displayComputerChoice(computerChoice);

        let roundWinner = decideRoundWinner(playerChoice, computerChoice);
        displayScore();

        // Increment rounds only if there is a winner, no draw
        if (roundWinner) {
            trackElapsedRounds()
        };
        
        if (elapsedRounds === maxRounds) {
            let gameWinner = getGameWinner(playerScore, computerScore);;
            displayGameWinner(gameWinner);
        };
    })
})

restartGameBtn.addEventListener('click', () => restartGame())