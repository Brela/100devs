for (i = 1; i < 100; i++) {
    let here = document.querySelector('#here')

    if (i % 3 === 0) {
        //divisible by 3 fizz
        here.innerText += i + 'fizz \n  ';
    } else if (i % 5 === 0) {
        //divisible by 5 and not 3 buzz
        if (i % 3 === 0) {
            here.innerText += i + 'fizzBuzz \n'
        } else if (i % 3 !== 0) {
            //divisible by 5 & 3 fizzBuzz
            here.innerText += i + 'buzz \n '
        }
    } else {
        here.innerText += i + "\n"
    }
}
//trying to get fizzbuzz to work