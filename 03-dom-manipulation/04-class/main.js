const btn = document.createElement('button');
btn.className = 'btn btn-dark mt-2';
btn.id = 'submi-btn';
btn.setAttribute('title', 'Submit');
const text = document.createTextNode('Submit');
btn.appendChild(text);

main_div = document.getElementById('main');
main_div.appendChild(btn);

var button = document.getElementById('submi-btn');
button.addEventListener('click',()=>{
    alert('Button Clicked');
});


