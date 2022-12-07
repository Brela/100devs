// *Variables*
// Create a variable and console log the value
let great = 10
console.log(great)

// Create a variable, add 10 to it, and alert the value
let greater = 11
console.log(greater + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4(one, two, three, four) {
    console.log(one - two - three - four)
} subtract4(2, 3, 4, 5)

// Create a function that divides one number by another and returns the remainder
function divideThese(one, two) {
    console.log(one / two)
} divideThese(20, 4)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function juma(one, two) {
    sum = Number(one) + Number(two)
    if (sum > 50) {
        alert('jumanji')
    }
} juma(25, 9)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply3Div(one, two, three) {
    let sub = one * two * three
    if (sub % 3 === 0) {
        console.log('zebra')
    }
} multiply3Div(4, 45, 2)
//*Loops*
//Create a function that takes in a word and a number. Console log the 
//word x times where x was the number passed in
function wordNum(word, number) {
    for (i = 1; i <= number; i++) {
        console.log(word)
    }
} wordNum('letsGoo', 10)
