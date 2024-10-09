// DOM Elements

let selectBtnsContainer = document.querySelector('.select-rps-container');
let selectChoiceBtns = document.querySelectorAll('.btnSelectRps');
let selectChoiceImgs = document.querySelectorAll('.choice-img');

// Choice
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
    "The computer won this time.",
    "You lose! Better luck next round.",
    "The bot outplayed you!",
    "Not this time! Keep trying!",
    "The bot takes the win!"
];

const drawPhrases = [
    "It's a draw! Let's try again.",
    "A tie! Both played well.",
    "No winner this time.",
    "It's a stalemate! Go again!",
    "We have a draw!",
    "Draw! Great minds think alike."
];



// Options
let choicesArr = ['rock', 'paper', 'scissors'];

// Computer Choice Funcs

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * choicesArr.length);
    let computerChoice = choicesArr[randomNum];

    displayComputerChoice(computerChoice)
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
    
    if(playerChoice === computerChoice) {
        scoreAnnouceHeader.textContent = getRandomPhrase(drawPhrases);
        console.log('Draw!')
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
        console.log('Player wins!')
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
        console.log('Player wins!')
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(winPhrases);
        console.log('Player wins!')
    } else {
        computerScore++;
        scoreAnnouceHeader.textContent = getRandomPhrase(losePhrases);
        console.log('Bot wins!')
    }


}

function displayScores () {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function resetScore () {
    playerScore = 0;
    computerScore = 0;
    
    displayScores()
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
        
        decideWinner(playerChoice, computerChoice);
        displayScores();
        
    })
})
