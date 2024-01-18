console.log('coming from game.js');

let userInput = prompt('Lets play ROCK PAPER SCISSORS!!!! WHATS YOUR MOVE');
console.log('User\'s pick: ' + userInput);

function getComputerChoice() {
    let randomNum = Math.random() * 10;
    let computerPick;
    
    if (randomNum >= 0 && randomNum <= 3.33) {
        computerPick = 'rock';
    } else if (randomNum > 3.34 && randomNum <= 6.66) {
        computerPick = 'scissors'; // Corrected the spelling
    } else {
        computerPick = 'paper';
    }
    return computerPick;
}

let computerChoice = getComputerChoice();
console.log('Computer\'s pick: ' + computerChoice);

function game(userInput, computerPick) {
    let winner;

    if (userInput === 'rock' && computerPick === 'scissors') {
        winner = 'User';
    } else if (userInput === 'scissors' && computerPick === 'rock') {
        winner = 'Computer';
    } else if (userInput === 'paper' && computerPick === 'rock') {
        winner = 'User';
    } else if (userInput === 'rock' && computerPick === 'paper') {
        winner = 'Computer';
    } else if (userInput === 'scissors' && computerPick === 'paper') {
        winner = 'User';
    } else if (userInput === 'paper' && computerPick === 'scissors') {
        winner = 'Computer';
    } else {
        // This handles the case where both picks are the same
        winner = 'Tie';
    }

    return winner;
}

console.log('The winner is ' + game(userInput, computerChoice));