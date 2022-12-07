const andi = document.querySelector('#andiImg')
const claire = document.querySelector('#claireImg')
const sharleen = document.querySelector('#sharleenImg')

document.querySelector('#andi').addEventListener('click', andiX)
document.querySelector('#claire').addEventListener('click', claireX)
document.querySelector('#sharleen').addEventListener('click', sharleenX);

function andiX() {
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireX() {
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenX() {
	claire.classList.add('hidden')
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}
