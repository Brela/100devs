//these first two lines are for placing spartans on every element with a certain class (contestant)
const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden')
	} else {
		alert("Wrong!");
	}
}
