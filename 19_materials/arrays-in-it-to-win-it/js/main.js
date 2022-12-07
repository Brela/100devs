//Create an array of movies with at least three movies.
let movies = ['Thor', 'Puss in Boots', 'Frozen']
//Using the array from above, store the first movie in a variable
let firstVal = movies[0]
//Get the length of the original array and store it in a new variable
let lengthOfMoviesArray = movies.length
//Get the last element in that array and store it in a new variable. 
//What if your array was really large and you didn't know the last index? 
//Would your solution still work?

let lastElementFromMoviesArray = movies[movies.length - 1]

// console.log(`${movies}`)
// console.log(`${firstVal}\nlength of array: ${lengthOfMoviesArray}\n${lastElementFromMoviesArray}`)

movies.forEach((x, i, a) => console.log(i, x, a))