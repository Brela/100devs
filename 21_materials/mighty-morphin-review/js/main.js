// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'Christmas'
console.log(holiday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let va = 'ChristMas'
let vas = va.split("")
console.log(vas[vas.length - 3], vas[vas.length - 2], vas[vas.length - 1])
console.log(vas.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
console.log(nums5(2, 4, 5, 7, 3))
function nums5(a, b, c, d, e) {
    total = 100 - (100 - a - b - c - d - e)
    return total >= 0 ? total : 0 - total
}
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
console.log(findLowest(4, 89, 56))
function findLowest(n1, n2, n3) {
    return Math.max(n1, n2, n3)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
    let result = Math.random()
    if (result < .5) {
        return 'heads'
    } else {
        return 'tails'
    }
}
console.log(headsOrTails())
let gg = []
gg.push(headsOrTails())
console.log(gg)


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headsOrTalls(times) {
    var arrgh = []
    for (i = 0; i <= times; i++) {
        console.log(headsOrTails())
    }
}
console.log(headsOrTalls(5))
