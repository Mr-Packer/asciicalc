


let input = document.querySelector('input');
let text = document.querySelector('p');
let reset = document.getElementById('reset');
let output = document.getElementById('output');

input.addEventListener('keypress' , handler);
reset.addEventListener('reset' , resetHandler);

function handler(event){
    text.innerHTML += `ASCII ${event.key}: ${event.charCode}` + `<br/>`;
}

function resetHandler(){
    output.innerHTML = '';
}