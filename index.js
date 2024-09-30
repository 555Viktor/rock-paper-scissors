
let options = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let draws = 0;

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

function announceScore () {
    return alert(`Wins : ${userScore}, Losses : ${computerScore}, Draws : ${draws}`);
}

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function getUserChoice () {
    let userInput = prompt('Choose one: rock, paper, scissors')

    return userInput.toLowerCase();
}

function playRound (userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        draws++;
        alert('Draw!')
        announceScore()
    } 

    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        userScore++;
        alert('Player wins!')
        announceScore()
    } 

    else if (userChoice === 'paper' && computerChoice === 'rock') {
        userScore++;
        alert('Player wins!')
        announceScore()
    } 

    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++;
        alert('Player wins!')
        announceScore()
    } 
    
    else {
        computerScore++;
        alert('Computer wins!')
        announceScore()
    }
}
