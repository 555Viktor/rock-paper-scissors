// Choice options + userInput
let options = ['rock', 'paper', 'scissors'];

let userInput;

// Score variables + max rounds
let userScore = 0;
let computerScore = 0;
let draws = 0;

let roundNum = 1;
let maxRounds = 5;

// Helper function to alert score
function announceScore () {
    return alert(`Wins : ${userScore}, Losses : ${computerScore}, Draws : ${draws}`);
}

// Functions to get computer and user choice for game to start
function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function getUserChoice () {

    while (true) {
        userInput = prompt(`Round #${roundNum}/${maxRounds} | Choose one: rock, paper, scissors`);
        
        if (options.includes(userInput.toLowerCase())) {
            return userInput.toLowerCase();
        } else {
            alert('Please select a valid value');
        }
    }

}

// Function to play 1 round
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

// Function to play maxRounds

function playGame () {

    for (let i = 1; i <= maxRounds; i++) {
        playRound (getUserChoice(), getComputerChoice());
        roundNum++;

        if (i >= maxRounds) {
            alert(`Max rounds played! Results will be reset.`)

            userScore = computerScore = draws = 0;
            roundNum = 1;
        }
    }

}

