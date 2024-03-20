// this creates an array inside a func and then randomizes it to give us a completely random element from the array.
function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)].toLowerCase();
        
    return randomChoice
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
    } else if (
        ( playerSelection == `rock` ) && ( computerSelection == `scissors` ) ||
        ( playerSelection == `paper` ) && ( computerSelection == `rock` ) ||
        ( playerSelection == `scissors` ) && ( computerSelection == `paper` )
    ) {
        return `You win!`
    }
}

// This will keep track of scores
let userScore = 0;
let cpuScore = 0;


// playGame() allows me to play the game in the console, while prompting the user for a selection in the game. 
// There are a total of 100 rounds, but the game will cease if either User or CPU reaches 3 points
function playGame() {
    alert(`Hello there! You will be playing Rock, Paper, Scissors against the computer. Whoever wins three rounds wins the game!`)

    for ( let i=1; i<=100; i++ ) { 

        let userChoice = prompt(`Let's play Rock, Paper, Scissors!`).toLowerCase();
        let result = playRound(userChoice, getComputerChoice());
        
        if ( result == `It's a tie!` ) {
            alert(`You and the CPU tied. Try again!`)
        } else if ( result == `You lose` ) {
            cpuScore++
            alert(`You have lost to the CPU. You have ${userScore} points. The CPU has ${cpuScore} points`)
        } else if ( result == `You win!` ) {
            userScore++
            alert(`You have won against the CPU. You have ${userScore} points. The CPU has ${cpuScore} points`)
        }

        if ( cpuScore == 3 ) {
            alert(`You have lost. Tough luck`)
            { break; }
        } else if ( userScore == 3 ) {
            alert(`You have won! Go celebrate or something, idk`)
            { break; }
        } 
    }
}

playGame()