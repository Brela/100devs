//--- Easy
//create a variable and assign it a number
let num = 100;
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input


// inputedVal = inputedVal + 25
// alert(inputedVal)

// function go() {
//     let ddr = document.querySelector('#danceDanceRevolution')
//     //add 25 to that number
//     newddr = ddr + 25
//     console.log(typeof ddr);
//     //alert that number
//     alert(newddr)
// }


//--- Hard
//create a variable that holds the h1
let h1Hold = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1Hold.addEventListener('click', funk)

function funk() {
    let inputedVal = document.querySelector('#danceDanceRevolution').value
    console.log(num + Number(inputedVal))
}