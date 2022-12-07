//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', checkDay)
// document.querySelector('#form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   event.checkDay(); // This is necessary because form submission will cause a page refresh by default
//   // Do stuff here
// });


function checkDay() {
  let day = document.getElementById('day').value.toLowerCase()
  let result = document.querySelector('#placeToSee');

  if (day === 'tuesday' || day === 'thursday') {
    result.innerText = 'It\'s a class day!!'
  }
  else if (day === 'saturday' || day === 'sunday') {
    result.innerText = 'It\'s the weekend!!'
  }
  else if (day === 'wednesday') {
    result.innerText = '✓ for Hump Day!!'
  }
  else if (day === 'monday' || day === 'friday') {
    result.innerText = 'It\'s a boring day :)'
  }
  else {
    result.innerText = 'alert: typo'
  }
}
