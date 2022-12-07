//Get a dog photo from the dog.ceo api and place the photo in the DOM
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    // const choice = document.querySelector('input').value
    // const url = 'https://pokeapi.co/api/v2/pokemon/' + choice

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.message)
            document.querySelector('img').src = data.message


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}