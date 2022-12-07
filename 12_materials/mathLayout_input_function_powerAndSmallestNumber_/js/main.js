
//------------------------------function(2)--- --------------------------------task 3--------------------------------
//get the least of 2 numbers

document.querySelector('#check1').addEventListener('click', min)

function min() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    if (a < b) {
        document.querySelector('#result1').innerText = a;
    } else {
        document.querySelector('#result1').innerText = b;
    }
}
//---------------------------------------------------------------------------task 4----------------------------------------
//my version --- Power your number
document.querySelector('#check2').addEventListener('click', power)

// let c = document.querySelector('#c').value;
// let d = document.querySelector('#d').value;
function power() {
    let c = document.querySelector('#c').value;
    let d = document.querySelector('#d').value;
    let answer = c ** d;
    document.querySelector('#result2').innerText = answer;
}

//---------------------------------------------------------------------------task 4 alt----------------------------------------
//the js.info task --- Power your number Alternate
document.querySelector('#check3').addEventListener('click', powerAlt)
function powerAlt(x, n) {
    var x = document.querySelector('#x').value;
    var n = document.querySelector('#n').value;
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    document.querySelector('#result3').innerText = result
}
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//changing their prompts to inputs and placing them in function

// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//     alert(pow(x, n));
// }


