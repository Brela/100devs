//Create a function that grabs the number of snacks from the input and 
//tells you to stop that many times


document.querySelector('#help').addEventListener('click', times)

function times() {
    let snacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for (i = 0; i < snacks; i++) {
        document.querySelector('#stops').innerText += '   STOP'
    }
}

times()

