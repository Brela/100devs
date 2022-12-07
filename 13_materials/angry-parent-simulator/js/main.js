// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const midName1 = document.querySelector('#middle1').value
//   const midName2 = document.querySelector('#middle2').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const midName1 = document.getElementById('middle1').value
  const midName2 = document.getElementById('middle2').value
  const lName = document.getElementById('lastName').value


  document.querySelector('#placeToYell').innerText = `${fName} ${midName1} ${midName2} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#middle1').value
//   const lMidName = document.querySelector('#middle2').value
//   const lName = document.querySelector('#lastName').value

//   const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }
