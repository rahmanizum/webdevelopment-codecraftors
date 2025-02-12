// Selctors 

// 1. Single Element Selector

const header = document.getElementById('header-title');
console.log(header);

header.textContent = 'Hello World';
header.innerText = 'Goodbye World';
header.innerHTML = '<h3>Hello World</h3>';

document.getElementById('main-header').style.borderBottom = 'solid 3px #000';

// 2. Multiple Element Selector

// Get elements by class name
const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// Convert HTML Collection into an array
const itemsArray = Array.from(items);
itemsArray.forEach(function(item) {
    console.log(item);
    item.style.backgroundColor = '#f4f4f4';
});

// Get elements by tag name
const li = document.getElementsByTagName('li');
console.log(li);

// 3. Query Selector
const mainHeader = document.querySelector('#main-header');
const input = document.querySelector('input');
const submit = document.querySelector('input[type="submit"]');
const firstItem = document.querySelector('.list-group-item');
const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

const titles = document.querySelectorAll('.title');
console.log({titles});
const oddItems = document.querySelectorAll('li:nth-child(odd)');
const evenItems = document.querySelectorAll('li:nth-child(even)');

oddItems.forEach(function(item) {
    console.log(item.innerText)
}
);


