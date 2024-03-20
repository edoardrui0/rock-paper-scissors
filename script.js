// this creates an array inside a func and then randomizes it to give us a completely random element from the array.
function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]

    return randomChoice;
}

// current for loop that is being worked on. So far it is allowing me to be able to fully randomize cpu selection
for (let i=0; i<=5; i++) {
    getComputerChoice().toLowerCase();
    console.log(getComputerChoice())
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

// This will keep track of scores
let userScore = 0;
let cpuScore = 0;


// ***new comment*** this function was commented out to work on the randomization of the cpu selection
// this function allows me to play the game in a single round. I haven't figured out how to do multiple rounds just yet
// function playGame() {

//     // commented out lines 62-93 to try something new
//     // this new method below allows me to keep track of score, need to work on loops

//     for ( let i=1; i<=5; i++ ) { 

//         let userChoice = prompt(`Let's play Rock, Paper, Scissors!`).toLowerCase();
//         let result = playRound(userChoice, computerSelection);
        
//         if ( result == `It's a tie!` ) {
//             console.log(`You and the CPU tied. Try again!`)
//             userChoice;
//         } else if ( result == `You lose` ) {
//             cpuScore++
//             console.log(`You have lost to the CPU. You have ${userScore} points. The CPU has ${cpuScore} points`)
//             userChoice;
//         } else if ( result == `You win!` ) {
//             userScore++
//             console.log(`You have won against the CPU. You have ${userScore} points. The CPU has ${cpuScore} points`)
//             userChoice;
//         }

//         if ( cpuScore == 3 ) {
//             console.log(`You have lost. Tough luck`)
//         } else if ( userScore == 3 ) {
//             console.log(`You have won! Go celebrate or something, idk`)
//         } 
//     }

//     // function keepScore() {
//         // let userScore = 0;
//         // let cpuScore = 0;
    
//     //     for ( let i=0; i<5; i++) {
//     //         userScore++;
//     //         cpuScore++;
//     //     }
//     // }

//     // let userChoice = prompt(`Let's play Rock, Paper, Scissors!`)
//     // let userScore = 0;
//     // let cpuScore = 0;

//     // for ( let i=1; i<=5; i++ ) {
        
//     //     let result = playRound(userChoice, computerSelection);
       
//     //     if ( result == `It's a tie!` ) {
//     //         console.log(`You and the CPU have tied. Try again!`)
//     //     }  else if ( result == `You lose` ) {
//     //         console.log(`You have lost to the CPU. A point for the CPU!`)
//     //         cpuScore++
//     //         console.log(cpuScore)
//     //     }  else if ( result == `You win!` ) {
//     //         console.log(`You have won! A point for you!`)
//     //         userScore++
//     //         console.log(userScore)
//     //     }

        
//     // }
// }

// playGame();
