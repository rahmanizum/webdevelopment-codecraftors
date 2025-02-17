var input = document.querySelector('input[type="text"]');
var button = document.querySelector('input[type="submit"]');
items = document.querySelector('#items');


input.addEventListener('input', inputEvent);
button.addEventListener('click', buttonEvent);


function inputEvent(e){
    console.log(e.target.value);
}

function buttonEvent(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = input.value;
    items.appendChild(li);
}

input.addEventListener('focus',runEVent);
input.addEventListener('blur',runEVent);
input.addEventListener('cut',runEVent);
input.addEventListener('paste',runEVent);
input.addEventListener('copy',runEVent);


function runEVent(e){
    console.log(`Event type: ${e.type}`);
}


select = document.querySelector('select');
select.addEventListener('change',changeEvent);

function changeEvent(e){
    console.log(`Option selected: ${e.target.value}`);
}
