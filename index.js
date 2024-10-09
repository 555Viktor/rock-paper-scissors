// DOM Elements
let selectChoiceBtns = document.querySelectorAll('.btnSelectRps');

// Choice Imgs
let playerChoiceImg = document.querySelector('#playerChoiceImg');
let computerChoiceImg = document.querySelector('#computerChoiceImg')

// Score
let scoreAnnouceHeader = document.querySelector('#headerAnounce')
let playerScoreSpan = document.querySelector('#playerScore');
let computerScoreSpan = document.querySelector('#computerScore');

let playerScore = 0;
let computerScore = 0;

// Announce phrases

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
    "Draw! Great minds think alike."
];

// Options
let choicesArr = ['rock', 'paper', 'scissors'];

// Computer Choice Funcs

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * choicesArr.length);
    let computerChoice = choicesArr[randomNum];

    return computerChoice;
}

function displayComputerChoice (choice) {
    computerChoiceImg.src = `./images/${choice}-icon.png`;
    computerChoiceImg.classList.replace('default-img', 'display-choice-img');
}

// Player Choice Funcs

function getPlayerChoice (btn) {
    let playerChoice = btn.id;

    return playerChoice;
}

function displayPlayerChoice (choice) {
    playerChoiceImg.src = `./images/${choice}-icon.png`;
    playerChoiceImg.classList.replace('default-img', 'display-choice-img');
}

// Decide winner

function decideWinner (playerChoice, computerChoice) {
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

function displayScore () {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function resetScore () {
    playerScore = 0;
    computerScore = 0;
    
    displayScore()
}

// Track rounds func

const maxRounds = 5;
let elapsedRounds = 0;

function trackElapsedRounds () {

    if (elapsedRounds < maxRounds) {
        elapsedRounds++;
    }

}
// Get phrase

function getRandomPhrase (arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    
    return arr[randomNum];
}

// Initial setup

selectChoiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        let playerChoice = getPlayerChoice(btn);
        let computerChoice = getComputerChoice();

        displayPlayerChoice(playerChoice);
        displayComputerChoice(computerChoice);

        let winner = decideWinner(playerChoice, computerChoice);
        displayScore();

        if (winner) {
            trackElapsedRounds()
        }
        
    })
})
