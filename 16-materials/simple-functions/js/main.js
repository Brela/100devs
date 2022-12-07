
//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(one, two) {
    let sub = one - two
    console.log('$' + sub)
}
subTwoNumsAndAlert(230, 33)
//create a function that divides three numbers and console logs the quotient
function dividesThreeNumsAndLogs(one, two, three) {
    console.log(one / two / three)
}
dividesThreeNumsAndLogs(64, 7, 8)
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsAndReturns(one, two, three) {
    return (one * two * three)
}
let product = multiplyThreeNumsAndReturns(6, 7, 7)
console.log(product)

function turnIntoMoney(currency) {
    let product = multiplyThreeNumsAndReturns(6, 70, 7)
    console.log(currency + product)
}
turnIntoMoney('€')
turnIntoMoney('$')
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of 
//dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1, n2, n3) {
    return (n1 + n2) % n3
}
console.log(addTwoAndDivide(3, 3, 2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater 
//than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, 
//subtract the difference of the last two numbers and console log the value. If the product is 100,
// multiply the first three numbers together and alert the remainder of dividing the fourth number
function numbers4(one, two, three, four) {
    let first2Times = one * two
    if (first2Times > 100) {
        console.log(one * two)
    } else if (first2Times < 100) {
        console.log(first2Times - (three - four))
    } else {
        console.log(first2Times * three % four)
    }
}

numbers4(2, 50, 4, 33)