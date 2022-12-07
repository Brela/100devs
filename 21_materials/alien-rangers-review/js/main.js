//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['thrones', 'kardishians', 'grey', 'dragons', 'resident']
tvShows.forEach(x => console.log(x))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 6765, 76888, 54, 3, 457, 55, 4, 3, 2, 2, 4, 554]

let arrOfEvenNums = arrOfNums.filter(x => x % 2 === 0).sort((x, y) => x - y)

console.log(arrOfEvenNums)


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function findLowestAndHighestNumbers(arx) {
    let sorted = arx.sort((a, b) => a - b)
    lowest = sorted[0]
    highest = sorted[sorted.length - 1]
    console.log(`lowest num: ${lowest};\nhighest num: ${highest}`)
}
findLowestAndHighestNumbers(arrOfNums)
