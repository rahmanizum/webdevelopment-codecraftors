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

