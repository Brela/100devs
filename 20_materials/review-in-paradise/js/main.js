// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "smoothie"

console.log(food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const brick = "white"
console.log(brick.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function three(a, b, c) {
    let an = (a / b) * c
    console.log(an)
}
three(2, 5, 6)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function
    cobeRootIt(a) {
    console.log(Math.cbrt(a).toFixed(4))
}


cobeRootIt(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
// function checkForSummer(a) {
//     let b = a.toLowerCase();
//     if (a === 'july' || a === 'june' || a === 'august' || a === september) {
//         alert('YAY')
//     } else {
//         alert('BOO')
//     }
// }
// console.log(checkForSummer('july'))

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
/* function skip5s(a) {
    for (let i = 1; i < a; i++) {
        if (a % 5 !== 0) {
            console.log(i)
        }
    }
}

console.log(skip5s(100)) */
