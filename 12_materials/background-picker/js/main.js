//typed without looking

document.getElementById('pink').onclick = goPink
document.getElementById('green').onclick = goGreen
document.getElementById('blue').onclick = goBlue
document.getElementById('orange').onclick = goOrange
document.getElementById('grey').onclick = goGrey

function goPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(228,116,236)'
  document.querySelector('body').style.color = 'rgba(255,255,255)'
}
function goGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,243,80)'
  document.querySelector('body').style.color = 'rgba(255,255,255)'
}
function goBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,255,255)'
  document.querySelector('body').style.color = 'rgba(255,255,255)'
}
function goOrange() {
  document.querySelector('body').style.backgroundColor = 'rgba(233,156,33)'
  document.querySelector('body').style.color = 'rgba(255,255,255)'
}
function goGrey() {
  document.querySelector('body').style.backgroundColor = 'rgba(50,50,10)'
  document.querySelector('body').style.color = 'rgba(255,255,255)'
}

//if we wanted to consolidate all of those (document.querySelector('body'))
//we could create a variable for it
// let bodySelector = document.querySelector('body')
//then use it like this:
//     bodySelector.style.color etc