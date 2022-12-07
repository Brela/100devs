//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [1, 5, 45, 54, 67, 67, 43, 3, 556, 7, 8, 76, 2, 44]
nums = nums.reduce((prev, sum) => sum += prev, 0)
console.log(nums)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareOnlyOriginals() {
    let nums2 = [3, 3, 3, 3, 5, 5, 6, 9, 2, 2, 2]
    console.log(nums2.map(num => num))
}
squareOnlyOriginals()


//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = str => str.split('').reverse().join('')

unoReverse('abcdefghijk')    // kjihgfedcba



//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => console.log(str === unoReverse(str))

palindromeCheck('racecar')

