document.getElementById('check').addEventListener('click', check)  //check is the function that it is activating

function check() {
  let day = document.getElementById('dayEntered').value.toLowerCase()

  if (day === 'saturday' || day === 'sunday') {
    document.getElementById('ourReply').innerHTML = ('It\'s the weekend!!!')
  }
  else if (day === 'tuesday' || day === 'thursday') {
    document.getElementById('ourReply').innerHTML = ('It\'s a class day!!!')
  }
  else if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    document.getElementById('ourReply').innerHTML = ('It\'s a regular day, no class, not the weekend yet')
  }
  else {
    document.getElementById('ourReply').style.fontSize = '3rem'
    document.getElementById('ourReply').innerHTML = ('Is that even a day of the week? Maybe it should be. Maybe you made an oopsie.')
  }
}