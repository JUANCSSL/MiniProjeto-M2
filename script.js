const form = document.getElementById('product-form');
const productList = document.getElementById('product-list');

form.addEventListener('submit',funtion(event){
    event.PreventDefalt();
    const productld = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    const listItem = document.createElement('li');
    listItem.innerHTML = <strong>ID:</strong> ${productId},<strong>Nome:</strong> ${productName}, <strong>Preço:</strong> ${productPrice};
    productList.appendChild(listItem);

    form.reset();
});
