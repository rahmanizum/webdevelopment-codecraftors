
// //examin the document object 
console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(typeof (title1));
// document.title=1234;
// console.log(document.doctype);
// console.log(document.head);
// console.log(typeof document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';  -> not a goodway 

// console.log(document.forms);
// console.log(document.links);


// const headerT= document.getElementById('header-title');
// const header= document.getElementById('main-header');
// console.log(headerT);
// // headerT.textContent='I am textContent';-- not conside style
// // headerT.innerText='I am innertext'; --> conside the style
//  headerT.innerHTML='I am innerHTML';
//  header.style.border='solid 3px black';

//  //get elements by class name 

//  const items=document.getElementsByClassName('list-group-item');
 
// //  items[1].textContent='hello  2';
// //  items[1].style.fontWeight='bold';
// //  items[1].style.backgroundColor='yellow';

//  for(const value of items){
//     value.style.backgroundColor='#f4f4';
//  }

//  //get element by tag name 

//  const tags = document.getElementsByTagName('li');
//  console.log(tags);
//  for(const value of tags){
//     value.style.fontWeight='bold';
//  }

//  const input = document.querySelector('input');
//  input.value='Hello your world';

//  const inputsubmit = document.querySelector('input[type="submit"]');
//  console.log(inputsubmit);
//  inputsubmit.style.backgroundColor='green';
//  inputsubmit.classList.add('mt-3');


//   //getting last item 

//   lastItem= document.querySelector('.list-group-item:last-child');
//   console.log(lastItem);
//   lastItem.innerHTML="Last child"

//   secondItem= document.querySelector('.list-group-item:nth-child(2)');
//   console.log(secondItem);
//   secondItem.innerHTML="Second Child"

//   //select odd items 

//   const odditems= document.querySelectorAll('li:nth-child(odd)');
//   console.log(odditems);
//   for(const value of odditems){
//     value.style.color='red';
//   }