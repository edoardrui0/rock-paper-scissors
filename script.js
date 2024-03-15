// this creates an array inside a func and then randomizes it to give us a completely random element from the array.
function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]

    return randomChoice;
}

console.log(getComputerChoice())