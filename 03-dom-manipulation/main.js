
// EXAMINE THE DOCUMENT OBJECT
console.log(document);

// 1. getElementById - Returns a single element by ID
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Item Lister'; // Changes text content
headerTitle.style.borderBottom = 'solid 3px #000'; // Add style

// 2. getElementsByClassName - Returns HTML Collection of elements
const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello 2'; // Change second item
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// 3. getElementsByTagName - Returns HTML Collection of elements by tag name
const li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';

// 4. querySelector - Returns the first matching element
const header2 = document.querySelector('#main-header');
header2.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input'); // Gets first input
input.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

const firstItem = document.querySelector('.list-group-item');
firstItem.style.color = 'red';

// 5. querySelectorAll - Returns NodeList of all matching elements
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Add Items List';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

// Style odd and even items differently
for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
