// -------------------             1       ------------

/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples: */

//MINE
function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

/* console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition'; */


// -------------------             2       ------------
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
}
let arr = [1, 2, 8, 3, 5, 4, 8, 0, 1, 9]
let filtered = filterRange(arr, 1, 4)
console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)



// -------------------             3       ------------
// sort nums
function filterRang(arri, a, b) {
    return arri.filter(item => (a >= item && item <= b));
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
}
let arri = [1, 3, 5, 8, 9]

console.log(filterRang(arri, 1, 4)); // 3,1 (matching values)

console.log(arri); // 5,3,8,1 (not modified)

// -------------------             4       ------------
// Sort in descending order
let ar = [5, 2, 1, -10, 8];
let rars = ar.sort((a, b) => b - a)

console.log(`this is ${rars}`)//sort in ascending order
let rares = ar.sort((a, b) => a - b)

console.log(`this is ${rares}`)

// -------------------             5       ------------
/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy. */
let arrWords = ["HTML", "JavaScript", "CSS", "Breland", "ransatklne"];

function sortWords() {
    return arrWords.slice().sort();
}
let sorted = sortWords()
console.log(sorted)


// -------------------             6       ------------


// -------------------             7       ------------


// -------------------             8      ------------

// -------------------             9       ------------

// -------------------             10       ------------

// -------------------             11       ------------

// -------------------             12       ------------

