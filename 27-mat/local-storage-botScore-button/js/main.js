//Create a button that adds 1 to a botScore stored in localStorage 
if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', Number(0))
}
let botScoreVal = Number(localStorage.getItem('botScore'))


document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne() {
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)
}
