//Set up initial variables
//Function for computerChoices
function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return 'paper';
        case 2:
            return 'rock';
        case 3:
            return 'scissors';
    }
}


//function to decide winner, inital goal is the function to keep score, first to five wins.
function incrementScore(score) {
    return score + 1;
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore = incrementScore(playerScore);
        return "player";
    } else {
        computerScore = incrementScore(computerScore);
        return "computer";
    }
}
//main game function



// Test the function
console.log(getComputerChoice());