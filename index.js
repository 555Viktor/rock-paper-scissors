// DOM Elements
let selectBtnsContainer = document.querySelector('.select-rps-container');
let selectChoiceBtns = document.querySelectorAll('.btnSelectRps');
let selectChoiceImgs = document.querySelectorAll('.choice-img');

let playerChoiceImg = document.querySelector('#playerChoiceImg');
let computerChoiceImg = document.querySelector('#computerChoiceImg')

// Score
let scoreAnnouceHeader = document.querySelector('#headerAnnounce')
let playerScoreSpan = document.querySelector('#playerScore');
let computerScoreSpan = document.querySelector('#computerScore');

// Options
let choicesArr = ['rock', 'paper', 'scissors'];

// Computer Choice Funcs

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * choicesArr.length);

    return choicesArr[randomNum];
}

function displayComputerChoice () {
    computerChoiceImg.src = `./images/${getComputerChoice()}-icon.png`;
}

// Player Choice Funcs

function getPlayerChoice () {
    selectChoiceBtns.forEach(btn => {

        btn.addEventListener('click', () => {
            let playerChoice = btn.dataset.choice;

            displayPlayerChoice(playerChoice)

            return playerChoice;
        })
        
    })
}

function displayPlayerChoice (choice) {
    playerChoiceImg.src = `./images/${choice}-icon.png`;

    playerChoiceImg.classList.replace('default-img', 'display-choice-img');
}

// Decide winner

function decideWinner () {

}

getPlayerChoice()
