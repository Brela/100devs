//Write your pseduo code first!
//listen for spartan/smurf (button)
// document.querySelector('#spartan').addEventListener('click', convert)
// //equation is c = (f * 1.8) + 32

// //get input type (cel or far)

// //need the value in c or f

// // then convert it to other type
// function convert() {
//     var farTemp = document.querySelector('#tempEnter').value
//     var temp = farTemp * 1.8 + 32;    //then show value to dom
//     document.querySelector('#result').innerText = temp
// }


//listen for button event listener / send to function convert
document.querySelector('#spartan').addEventListener('click', conversion)

//function convert will convert the input then display the solution .innerText
function conversion() {
    let tempF = document.querySelector('#temp').value
    let solution = tempF * 1.8 + 32;
    document.querySelector('#solution').innerText = solution
}