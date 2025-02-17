const btn = document.querySelector('#btn');
const submitbtn = document.querySelector('input[type="submit"]');
console.log(submitbtn)

btn.addEventListener('click',clickHandler);

function clickHandler(e){
    if(submitbtn.classList.contains('d-none')){
        submitbtn.classList.remove('d-none');
    }
    else{
        submitbtn.classList.add('d-none');
    }
    
}