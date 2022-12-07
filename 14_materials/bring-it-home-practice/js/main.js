// *Variables*
// Create a variable and console log the value
var number = 10
console.log(number)

//==================================================================================================
// Create a variable, add 10 to it, and alert the value
var number2 = 10
alert(number2 + 10)

//==================================================================================================
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract4(num1, num2, num3, num4) {
    let solution = num1 - num2 - num3 - num4
    alert(solution)
}
subtract4(100, 40, 33, 44)

//==================================================================================================
// Create a function that divides one number by another and returns the remainder

function remainder(num1, num2) {
    return (num1 % num2)
}
console.log(remainder(100, 28))

//==================================================================================================
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers(one, two) {
    if ((one + two) > 50) {
        alert('jumanji')
    } else {
        alert('nada')
    }
}
addTwoNumbers(40, 11)

//==================================================================================================
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyCheckDivisible(one, two, three) {
    if (((one * two * three) % 3) === 0) {
        alert('zebra')
    } else {
        alert('no zebra')
    }
}
multiplyCheckDivisible(10, 4, 4)