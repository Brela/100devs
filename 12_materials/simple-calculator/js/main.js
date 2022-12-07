let total = 0

document.querySelector('#reset').addEventListener('click', f1)
document.querySelector('#teaThree').addEventListener('click', f2)
document.querySelector('#lineNine').addEventListener('click', f3)
document.querySelector('#linuxTwo').addEventListener('click', f4)
document.querySelector('#timesHundo').addEventListener('click', f5)

function f1() {
  total = 0
  document.querySelector('#result').innerHTML = total
}
function f2() {
  total += 3
  document.querySelector('#result').innerHTML = total
}
function f3() {
  total += 9
  document.querySelector('#result').innerHTML = total
}
function f4() {
  total -= 2
  document.querySelector('#result').innerHTML = total
}
function f5() {
  total *= 100
  document.querySelector('#result').innerHTML = total
}