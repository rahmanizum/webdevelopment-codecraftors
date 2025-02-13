//TRAVERSING THE DOM

const items = document.querySelector('#items');
console.log(items);

//parentNode
console.log(items.parentNode);
items.parentNode.style.backgroundColor = 'aqua';
console.log(items.parentNode.parentNode);
console.log(items.parentNode.parentNode.parentNode);

//parentElement
console.log(items.parentElement);

//childNodes
console.log(items.childNodes);

//children
console.log(items.children);
console.log(items.children[1]);
console.log(items.firstChild)
console.log(items.firstElementChild);
console.log(items.lastChild)
console.log(items.lastElementChild);

//nextSibling
console.log(items.nextSibling);
console.log(items.nextElementSibling);

//previousSibling
console.log(items.previousSibling);
console.log(items.previousElementSibling);

//createElement

//create a div

const div = document.createElement('div');
div.className = 'hello';
div.id = 'hello1';
div.setAttribute('title', 'Hello Div');
console.log(div)

// create text node
const text = document.createTextNode('Hello World');
div.appendChild(text);

student = document.querySelector('#students');
main = document.querySelector('#main');
main.appendChild(div);

//inserting before
newDiv = div.cloneNode(true);
main.insertBefore(newDiv, student);






