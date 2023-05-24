//Set up initial variables
//Create Function for computer choice
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


//function to decide winner
//main game function



// Test the function
console.log(getComputerChoice());