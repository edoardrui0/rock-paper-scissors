// this creates an array inside a func and then randomizes it to give us a completely random element from the array.
function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]

    return randomChoice;
}

// this creates a conditional to determine if the player is a winner, loser, or if there is a tie 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie!`
    } else if ( 
        ( playerSelection == `rock` ) && ( computerSelection == `paper` ) ||
        ( playerSelection == `paper` ) && ( computerSelection == `scissors` ) ||
        ( playerSelection == `scissors` ) && ( computerSelection == `rock` )
        ) {
        return `You lose`
    } else {
        return `You win!`
    }
}


// const playerSelection = 'scissors'.toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

// console.log(playerSelection)
// console.log(computerSelection)


// console.log(playRound(playerSelection, computerSelection))

// this function allows me to play the game in a single round. I haven't figured out how to do multiple rounds just yet
function playGame() {
    let userChoice = prompt(`Let's play Rock, Paper, Scissors!`)

    for ( let i=1; i<=5; i++ ) {
       
        console.log(`this is the user's choice: ` + userChoice)
        console.log(`this is the CPU selection: ` + computerSelection)  

        return playRound(userChoice, computerSelection);
    }
}

console.log(playGame());
