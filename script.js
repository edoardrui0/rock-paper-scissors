// this creates an array inside a func and then randomizes it to give us a completely random element from the array.
function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]

    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `It's a tie!`
    } else if ( 
        ( playerSelection.toLowerCase() == `rock` ) && ( computerSelection.toLowerCase() == `paper` ) ||
        ( playerSelection.toLowerCase() == `paper` ) && ( computerSelection.toLowerCase() == `scissors` ) ||
        ( playerSelection.toLowerCase() == `scissors` ) && ( computerSelection.toLowerCase() == `rock` )
        ) {
        return `You lose`
    } else {
        return `You win!`
    }
}



const playerSelection = 'scissors';
const computerSelection = getComputerChoice();

let choiceArray = ['Rock', 'Paper', 'Scissors'];

console.log(playerSelection)
console.log(computerSelection)


console.log(playRound(playerSelection, computerSelection))