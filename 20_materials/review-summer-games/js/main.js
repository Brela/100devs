// //Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyEachElementInArray(arr) {
    let totals = 1;
    for (let i = 0; i < arr.length; i++) {

        totals *= arr[i]
    }
    console.log(totals)
}

multiplyEachElementInArray([3, 4, 6, 7, 8])


function next(arr) {
    let product = 1
    arr.forEach(num => product *= num)
    console.log(product)
}
next([10, 2, 3])

// let arrayX = arrayX.map((x) => {

//     if (x === 'rat') {

//         arrayX[x] === 'Cat'
//     }
// });
// console.log(['rat', 'mouse', 'rat', 'mouse', 'rat'])

function onlyevens(nums) {
    let evens = []
    nums.forEach((n) => {
        if (n % 2 === 0) {
            evens.push(n)
        }
    })
    return evens
}

console.log(onlyevens([4, 5, 6, 7, 23, 5, 5, 7, 8, 88, 99, 9]))