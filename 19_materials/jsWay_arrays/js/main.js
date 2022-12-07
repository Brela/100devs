// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
let greeks = ['Athos', 'Porthos', 'Aramis']

// Adds the "D'Artagnan" value to the array.
greeks.push('D\'Artagnan')

for (i = 0; i < greeks.length; i++) {
    document.querySelector('.greeks').innerText += (' ' + greeks[i])
}

// Shows each array element using the forEach() method.
greeks.forEach((x, i) => document.querySelector('.forEach').innerText += ` ${x}`)

// Remove poor Aramis.
greeks.splice(2, 1)
greeks.forEach((x, i) => document.querySelector('.splice').innerText += ` ${x}`)

// Shows each array element using a for-of loop.
for (const greek of greeks) {
    document.querySelector('.for-of').innerText += greek
}

// Sum of values
// Write a program that creates the following array, then calculates
//and shows the sum of its values (42 in that case).
var total = 0
const valu = [3, 11, 7, 2, 9, 10];
for (i = 0; i < valu.length; i++) {
    total += valu[i]
}
document.querySelector('.sum').innerText = total

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
const values = [3, 11, 7, 2, 75, 9, 10];
values.sort(function (a, b) { return a - b });
document.querySelector('.max').innerText = values[6]


// List of words
// Write a program that asks the user for a word until the user types "stop".
//The program then shows each of these words, except "stop".

//COULDN'T GET THIS ONE TO WORK

// document.querySelector('#button').addEventListener('click', W);
// let listOfWords;
// function W() {
//     var wordIn = document.querySelector('#word').value
//     let arrOfWords = ['first',]

//     if (wordIn === 'stop') {
//         document.querySelector('.list').innerText = listOfWrods
//     } else {
//         arrOfWords.push(wordIn);
//         console.log(wordIn)

//         listOfWords += ` ${wordIn}`
//     }
//     return;
// }
let words = []
let word = (prompt('input word')).toLowerCase().trim()

while (word !== 'stop') {
    words.push(word);
    word = prompt('try again');
}
console.log(words);
