// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, 
//and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve 
//(rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bulbasaurEvolves = 16
let caterpieEvolves = 7
let weedleEvolves = 7
let bulbasaur = 5 - bulbasaurEvolves
let caterpie = 1 - caterpieEvolves
let weedle = 1 - weedleEvolves
let total = bulbasaur + caterpie + weedle
console.log(Math.abs(total))

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. 
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertCelsiusToFar(cel) {
    return cel * 1.8 + 32
}
function battleCheck(temp) {
    temp = convertCelsiusToFar(temp)
    if (temp > 0) {
        console.log('can battle')
    } else {
        console.log('too cold')
    }
}
battleCheck(-20)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. 
//Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party