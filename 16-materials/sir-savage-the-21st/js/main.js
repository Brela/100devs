// Create a function that has a loop that prints '21' 21
// times to the console and then call that function
function sava() {
    for (let i = 1; i <= 21; i++) {

        console.log(Number(i))
    }
}

sava()

//Bonus can you make it print '21' 21 times to the dom?
function savas() {
    for (let i = 1; i <= 21; i++) {
        document.querySelector('#savageSays').innerText += ' 21'
    }
}

savas()