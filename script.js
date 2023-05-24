//Set up initial variables
const computerChoice = getComputerChoice
//Create Function for computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 1:
            return 'paper';
        case 2:
            return 'rock';
        case 3: 
            return 'scissors';
    }
}
//function to decide winner
//main game function


console.log("Hello World");