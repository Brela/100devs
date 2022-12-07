// //these first two lines are for placing spartans on every element with a certain class (consonant or vowel)
// let wandCon = document.querySelectorAll('.wandC')
// Array.from(wandCon).forEach(element => element.addEventListener('click', createCon))

// let wandVo = document.querySelectorAll('.wandV')
// Array.from(wandVo).forEach(element => element.addEventListener('click', createVowel))
document.getElementById('wand1').addEventListener('click', createCon1)
document.getElementById('wand2').addEventListener('click', createVow2)
document.getElementById('wand3').addEventListener('click', createCon3)
document.getElementById('wand4').addEventListener('click', createVow4)
document.getElementById('wand5').addEventListener('click', createCon5)



//I need to pull each class's spartan and send it to a function ^^
//wandC should go to function createConstanant, while wandV should go to function createVowel

//function for cons and vowels should eachhave an array of constanants to choose from and pick a random one
//how do i pick a random item from a js array?  math.random?
function createCon1() {
    let consonant = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];

    const randomCon = consonant[Math.floor(Math.random() * consonant.length)]
    document.querySelector('.r1').innerHTML = randomCon //randomCon //,consonant[random]);
}
function createVow2() {
    let vowel = 'AEIOU';

    const randomVow = vowel[Math.floor(Math.random() * vowel.length)]
    document.querySelector('.r2').innerHTML = randomVow //randomCon //,consonant[random]);
}
function createCon3() {
    let consonant = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];

    const randomCon = consonant[Math.floor(Math.random() * consonant.length)]
    document.querySelector('.r3').innerHTML = randomCon //randomCon //,consonant[random]);
}
function createVow4() {
    let vowel = 'AEIOU';

    const randomVow = vowel[Math.floor(Math.random() * vowel.length)]
    document.querySelector('.r4').innerHTML = randomVow //randomCon //,consonant[random]);
}
function createCon5() {
    let consonant = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'S', 'T', 'V', 'X', 'Z', 'H', 'R', 'W', 'Y'];

    const randomCon = consonant[Math.floor(Math.random() * consonant.length)]
    document.querySelector('.r5').innerHTML = randomCon //randomCon //,consonant[random]);
}


