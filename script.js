//Rock, Paper, Scissors game
// Set up initial variables
const choices = ["rock", "paper", "scissors"];
let winners = [];
let playerScore = 0;
let computerScore = 0;

// Function for computerChoices
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

// Function to decide winner
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

function playRound() {
  const playerChoice = prompt("Enter your choice (rock, paper, or scissors):");
  const computerChoice = getComputerChoice();

  console.log("Player's choice:", playerChoice);
  console.log("Computer's choice:", computerChoice);

  const roundWinner = checkWinner(playerChoice, computerChoice);
  winners.push(roundWinner);

  console.log("Round winner:", roundWinner);
  console.log("Player score:", playerScore);
  console.log("Computer score:", computerScore);
}

// Game loop
while (playerScore < 5 && computerScore < 5) {
  playRound();
}

// Game over
if (playerScore > computerScore) {
  console.log("Player wins the game!");
} else if (playerScore < computerScore) {
  console.log("Computer wins the game!");
} else {
  console.log("It's a tie!");
}