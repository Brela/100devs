// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'Do you have your day planned out'
sentence.includes('?') ? console.log('QUESTION') : console.log('NOT')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let devLevel = 'jr. dev jr. dev for life'.replaceAll('jr. dev', 'software engineer')
console.log(devLevel)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let hand;
function getHand() {
    let r = Math.random()
    if (r < .33) {
        return 'rock'
    } else if (r < .66) {
        return 'scissors'
    } else {
        return 'paper'
    }
}



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

let botHand = getHand()
console.log(botHand)
let userHand = getHand()
console.log(userHand)
function checkWin() {

    if ((userHand === 'rock' && botHand === 'scissors') || (userHand === 'scissors' && botHand === 'paper') || (userHand === 'paper' && botHand === 'rock')) {
        console.log('player wins')
    } else if (userHand === botHand) {
        console.log('tied!')
    } else {
        console.log('bot wins')
    }
}
checkWin()

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
