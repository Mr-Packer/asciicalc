

let form = document.querySelector('form');
let input = document.querySelector('input');
let text = document.querySelector('p');
let output = document.getElementById('output');

input.addEventListener('keypress' , handler);
input.addEventListener('focus' , focusHandler);
form.addEventListener('reset' , resetHandler);

input.focus();

function focusHandler(event){
    event.target.select();
};

function handler(event){
    if(event.key == ' '){
        text.innerHTML += `ASCII ${event.code}: ${event.charCode}` + `<br/>`;
    }else{
        text.innerHTML += `ASCII ${event.key}: ${event.charCode}` + `<br/>`;
    }
}

function resetHandler(event){
    text.textContent = '';
};

