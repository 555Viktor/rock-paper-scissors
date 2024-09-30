
let options = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function getUserChoice () {
    let userInput = prompt('Choose one: rock, paper, scissors')

    return userInput;
}

getUserChoice();