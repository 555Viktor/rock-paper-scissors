let options = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
let draws = 0;

let userInput;

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

    while (true) {
        userInput = prompt('Choose one: rock, paper, scissors');
        
        if (options.includes(userInput.toLowerCase())) {
            return userInput.toLowerCase();
        } else {
            alert('Please select a valid value');
        }
    }

}

function playRound (userSelect, computerSelect) {

    if (userSelect === computerSelect) {
        draws++;
        alert(`Draw! \n${userSelect} vs. ${computerSelect}`);
        announceScore();
    } 

    else if (userSelect === 'rock' && computerSelect === 'scissors') {
        userScore++;
        alert(`Player wins! \n${userSelect} vs. ${computerSelect}`);
        announceScore();
    } 

    else if (userSelect === 'paper' && computerSelect=== 'rock') {
        userScore++;
        alert(`Player wins! \n${userSelect} vs. ${computerSelect}`);
        announceScore();
    } 

    else if (userSelect === 'scissors' && computerSelect === 'paper') {
        userScore++;
        alert(`Player wins! \n${userSelect} vs. ${computerSelect}`);
        announceScore();
    } 
    
    else {
        computerScore++;
        alert(`Computer wins! \n${userSelect} vs. ${computerSelect}`);
        announceScore();
    }
}

playRound(userChoice, computerChoice);