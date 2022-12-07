//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice

    fetch(url)  // fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks[0])  // add index [0] for first drink
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions

            document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
            document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
            document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
            document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
            document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
            document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
            document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient7
            document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient8
            document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient9
            document.querySelector('.ingredient7').innerText = data.drinks[0].strIngredient10


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}