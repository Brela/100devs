// *Variables*
// Declare a variable, assign it a value, and alert the value
var valor = 100
console.log(valor) ///so the alert doesn't bother
// Create a variable, divide it by 10, and console log the value
let divi;
divi = 900;
console.log(divi / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply3(one, two, three) {
    console.log(one * two * three)
} multiply3(8, 2, 4)

// Create a function that takes in 4 numbers. Add the first two numbers and
//subtract the next two. Console log the result
function subLast2FromFirst2(one, two, three, four) {
    console.log(one + two - three - four)
} subLast2FromFirst2(5, 6, 7, 8)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, 
//subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winner3(one, two, three) {
    console.log((100 + one - two) / three)
} winner3(8, 2, 4)

// Create a function that takes in a day of the week. If it is a weekend alert, 
//"weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

document.querySelector('#button').addEventListener('click', isWeekend)


function isWeekend() {
    var day = document.querySelector('#day').value.toLowerCase()
    if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        alert('week day')
    } else if (day === 'saturday' || day === 'sunday') {
        alert('weekend')
    } else {
        alert('Try again.')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function number1(one) {
    for (i = 1; i <= one; i++)
        console.log(i += 2)
} number1(20)

//DONE BABY LET'S GOOOOOOOOoo!
