

//-------------------------------------------------------------------------------------------------------
//functions can be called by their name -- createUser()
//function(2)--- task 1 -------------

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm('Did parents allow you?');
//     }
// }

document.querySelector('#click').addEventListener('click', checkAge)

function checkAge() {
    let age = document.querySelector('#input').value
    if (age >= 18) {
        document.querySelector('#result').innerText = 'old enough'
    } else {
        document.querySelector('#result').innerText = 'not old enough'
    }


}
