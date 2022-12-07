// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = ' oca    '
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = 'hello are you going to throw that apple in PUBG'
let split = words.split(' ')
console.log(split)
let includeS = words.includes('app') ? 'contains an apple' : 'does not contain apple'
console.log(includeS)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rPs() {
    random = Math.random()
    if (random < .3333) {
        return 'rock'
    } else if (random < .6677) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

rPs()
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
    let botChoice = rPs()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')) {
        console.log('player wins!')
    } else if (playerChoice === botChoice) {
        console.log('you tied the bot')
    } else {
        console.log('you lose!')
    }
}
checkWin(rPs())

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXtimes(arr) {
    arr.forEach(choice => checkWin(choice))
}

playGameXtimes(['rock', 'paper', 'scissors']) * 10