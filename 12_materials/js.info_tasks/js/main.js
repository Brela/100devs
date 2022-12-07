

//-------------------------------------------------------------------------------------------------------
//functions can be called by their name -- createUser()
//function(2)--- task 2 -------------


//using ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }
// //usingOR || the shortest variant
// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

//function(2)--- task 3 -------------
document.querySelector('#check').addEventListener('click', min)
function min() {
    let a = document.querySelector('#a').value
    let b = document.querySelector('#b').value
    if (a < b) {
        document.querySelector('#result').innerText = a;
    } else {
        document.querySelector('#result').innerText = b;
    }
}


