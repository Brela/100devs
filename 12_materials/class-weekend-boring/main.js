document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#dayEntered').value.toLowerCase()

  if (day === 'tuesday' || day === 'thursday') {
    document.getElementById('ourReply').innerHTML = ("class day baby")
  }
  else if (day === 'saturday' || day === 'sunday') {
    document.getElementById('ourReply').innerHTML = ("it's the weeknd")
  }
}

