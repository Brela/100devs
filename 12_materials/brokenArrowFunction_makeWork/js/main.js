//broken / not connected to html

document.querySelector('#check').addEventListener('click', arrowF)

function arrowF(question, yes, no) { confirm(question) ? yes() : no() };

ask(
    'Do you agree',
    () => alert('You agreed'),                   //arrow functions need a comma after each line?
    () => alert('You canceled the execution')
);

let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    'Do you agree?',
    () => console.log('You agreed'),
    () => console.log('You interrupted execution'),
);