// Create a function that takes in an array. If the first number, is less than the last number,
//alert "Hi". If the first number is greater than the last number,
// alert "Bye". If they are equal, alert "We close in an hour".
function firstOrLastLetterGreater(argh) {
    if (argh[0] < argh[argh.length - 1]) {
        alert('hi')
    } else if (argh[0] > argh[argh.length - 1]) {
        alert('bye')
    } else {
        alert('we close in an hour')
    }
}


firstOrLastLetterGreater(4, 5, 5, 8)

let colors = ['green', 'blue', 'yellow', 'black']
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}