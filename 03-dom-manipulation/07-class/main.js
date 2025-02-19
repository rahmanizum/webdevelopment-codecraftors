var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Load items from local storage
loadItems();

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Store item in local storage
  storeItems(newItem);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      var itemName = li.firstChild.textContent;
      itemList.removeChild(li);

      // Remove item from local storage
      removeItems(itemName);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach((item)=>{
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Store Items
function storeItems(item){
  let items;
  if(localStorage.getItem('items') === null){
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }

  items.push(item);

  localStorage.setItem('items', JSON.stringify(items));
}

// Load Items
function loadItems(){
  let items;
  if(localStorage.getItem('items') === null){
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }

  items.forEach(item => {
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(item));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
  });
}

// Remove Items
function removeItems(item){
  let items;
  if(localStorage.getItem('items') === null){
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }

  const itemIndex = items.indexOf(item);

  if (itemIndex > -1) {
    items.splice(itemIndex, 1);
  }

  localStorage.setItem('items', JSON.stringify(items));
}