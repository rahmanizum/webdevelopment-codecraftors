const input = document.querySelector('input[type="text"]');
const button = document.querySelector('input[type="submit"]');
const  select = document.querySelector('select');
const items = document.querySelector('#items');
const form = document.querySelector('form');


input.addEventListener('input', inputEvent);
select.addEventListener('change',changeEvent);


function inputEvent(e){
    console.log(e.target.value);
}

function changeEvent(e){
    console.log(`Option selected: ${e.target.value}`);

}

input.addEventListener('focus',runEVent);
input.addEventListener('blur',runEVent);
input.addEventListener('cut',runEVent);
input.addEventListener('paste',runEVent);
input.addEventListener('copy',runEVent);


function runEVent(e){
    console.log(`Event type: ${e.type}`);
}

button.addEventListener('click', buttonEvent);

function buttonEvent(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = input.value;
    items.appendChild(li);
}


form.addEventListener('submit', formEvent);

function formEvent(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = input.value;
    items.appendChild(li);
}





