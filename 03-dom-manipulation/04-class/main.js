const btn = document.querySelector('#btn');
const submitbtn = document.querySelector('input[type="submit"]');
console.log(submitbtn)

btn.addEventListener('click',clickHandler1);

function clickHandler1(){
    console.log('Button Clicked');
}

function clickHandler2(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

function clickHandler3(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

function clickHandler4(e){
if(submitbtn.classList.contains('d-none')){
    submitbtn.classList.remove('d-none')
}else{
    submitbtn.classList.add('d-none')
}
}

btn.addEventListener('dblclick',dblclickHandler);

function dblclickHandler(){
    console.log('Button Double Clicked');
}

btn.addEventListener('mousedown',mousedownHandler);

function mousedownHandler(){
    console.log('Button Mouse Down');
}

btn.addEventListener('mouseup',mouseupHandler);

function mouseupHandler(){
    console.log('Button Mouse Up');
}

const box = document.querySelector('#box');

box.addEventListener('mouseenter',mouseenterHandler);

function mouseenterHandler(){
    console.log('Mouse Enter');
}

box.addEventListener('mouseover',mouseoverHandler);

function mouseoverHandler(){
    console.log('Mouse Over');
}


box.addEventListener('mouseleave',mouseleaveHandler);

function mouseleaveHandler(){
    console.log('Mouse Leave');
}

box.addEventListener('mouseout',mouseoutHandler);

function mouseoutHandler(){
    console.log('Mouse Out');
}

box.addEventListener('mousemove',mousemoveHandler2);

function mousemoveHandler1(e){
    console.log(e.offsetX);
    console.log(e.offsetY);
}

function mousemoveHandler2(e){
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
}


