//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 

function reverseList(arr) {
    console.log(arr.reverse())
}
reverseList(['r', 'i', 'y', 'a'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of 
//each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquaresOf2Arrays(arr1, arr2) {
    arr1 = arr1.reduce((prev, current) => current ** 2 + prev)

    arr2 = arr2.reduce((prev, current) => Math.pow(current, 3) + prev)
    arr1 > arr2 ? console.log('a is greater') : console.log('b is greater')
}
compareSquaresOf2Arrays([4, 7, 777, 97, 3, 5, 4], [1, 2, 4, 6, 2])

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function ownIndexAmultipleOfNUm(arr) {
    let newArr = []
    arr.forEach((el, i) => { if (el % i === 0) newArr.push(el) })
    return newArr
}

console.log(ownIndexAmultipleOfNUm([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumNums(a) {
    return a.reduce((acc, curr) => acc + Number(curr), 0)
}

console.log(sumNums([3, 6, 78, '435']))