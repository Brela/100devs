//Create an array of movie titles. Loop through the array and each element to the h2.
let crypto = ['btc', 'xrp', 'eth', 'algo']
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')
crypto.forEach((x, i) => h2.innerText += (` ${x}`))

// for (let i = 0; i < crypto.length; i++) {
//     document.querySelector('p').innerText += movies[i]
// }

//Create an array of numbers. Loop through the array and add three to each number 
//and replace the old number.
let numbers = [4, 6, 3, 45, 8, 2, 90, 6, 3, 50]
h3.innerText = numbers

let newNums = numbers.forEach((x, i) => h1.innerText += (` ${i + 3}`))

// numbers.forEach((x, i) => numbers = i + 3)

//Find the average of all the numbers from question three
let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     document.querySelector('p').innerText += sum += nums[i]
// }
