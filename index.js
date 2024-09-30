
let options = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function getUserChoice () {
    let userInput = prompt('Choose one: rock, paper, scissors')

    return userInput;
}

getUserChoice();