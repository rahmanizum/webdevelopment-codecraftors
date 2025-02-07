function listOneProduct() {
    fetch('https://freeapi.miniprojectideas.com/api/amazon/GetProductById?id=336')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


listOneProduct();
console.log('Before calling listAllProducts');