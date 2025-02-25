

//Assigning elements to variables
const form = document.querySelector(`#my-form`);
const price = document.getElementById("price");
const dish = document.getElementById("pname");
const table = document.getElementById("ptable");
const submitButton = document.getElementById(`submitbtn`)
const table1 = document.getElementById(`tablebody1`);
const table2 = document.getElementById(`tablebody2`);
const table3 = document.getElementById(`tablebody3`);
// const tablefootData = document.getElementById(`tablefootdata`);

const crud_base_url = 'https://crudcrud.com/api/51739ad6505845e4a387eb3be96be2b1'


submitButton.addEventListener('click',onSubmit);
table1.addEventListener('click',onEditorDelete);
table2.addEventListener('click',onEditorDelete);
table3.addEventListener('click',onEditorDelete);

// ON SUBMIT FUNCTION 
async function onSubmit(e){
    e.preventDefault();
//creating person object
    const dishdata = {
        dishPrice: price.value,
        dishName : dish.value ,
        tableNo : table.value,
    }

//add to server 

await axios.post(`${crud_base_url}/dishdata`, { dishdata })
  .then((res) => {
    console.log(`${res.data.dishdata.dishName} added`);
  })
  .catch((err) => {
    console.error(err);
  });
  //print on browser by get 
  axios.get(`${crud_base_url}/dishdata`)
  .then((res) => { 
    showOutput(res);
  })
  .catch((err) => {
    console.error(err);
  });
    
}

// ON EDITORDELETE FUNCTION 
function onEditorDelete(e){
    e.preventDefault();
    // get data from button
    const btnId = e.target.id;
// WHEN CLICK DELETE BUTTON 
if (e.target && e.target.classList.contains("delbtn")){
//remove from server 
axios
.delete(`${crud_base_url}/dishdata/${btnId}`)
.then(res=>console.log(`This id : ${btnId} data deleted`))
.catch(err=> console.error(err));
//remove from browser
e.target.parentElement.parentElement.remove();

}
}

// FUNCTION FOR ADDING TO BROWSER
function showOutput(res){
    console.log(res.data);
    table1.innerHTML=table1.children[0].outerHTML;
    table2.innerHTML=table2.children[0].outerHTML;
    table3.innerHTML=table3.children[0].outerHTML;
    res.data.forEach((ele,index) => {
        const tr = document.createElement(`tr`);
        const val = ele.dishdata;
        const userId = ele._id;
        const tableId = ele.dishdata.tableNo;
        const txt = `
        <td>${index+1}</td>
        <td>${val.dishName}</td>
        <td>${val.dishPrice}</td>
        <td>
            <button class="btn btn-danger delbtn" id = ${userId}>
                delete
            </button>
        </td>
        `;
        //appending details to table
        tr.innerHTML+=txt;
        //Choosing correct table
        if(tableId === 'table1'){
          table1.appendChild(tr);   
        }
        if(tableId === 'table2'){
          table2.appendChild(tr);   
        }
        if(tableId === 'table3'){
          table3.appendChild(tr);   
        }

        //back to empty 
        price.value = ``;
        dish.value = ``;
        table.value =`Choose...`;
        
    });

  }

// PRINTING DATA WHEN CUSTOMER OPEN WEBSITE
axios
.get(`${crud_base_url}/dishdata`)
.then((res) => { 
  showOutput(res);
})
.catch((err) => {
  console.error(err);
});


