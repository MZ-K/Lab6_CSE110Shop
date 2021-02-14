// Script.js


window.addEventListener('DOMContentLoaded', () => {
  // TODO

  // let fetchedResponse;
  // let url = 'https://fakestoreapi.com/products';
  let myStorage = window.localStorage;

  if (myStorage.getItem('products') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => myStorage.setItem('products', JSON.stringify(data)));

    myStorage.setItem('count_array', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }

  let temp = JSON.parse(myStorage.getItem('products'));
  let arr = JSON.parse(myStorage.getItem('count_array'));

  let pl = document.getElementById('product-list');

  let count = document.getElementById('cart-count');

  

  for (let i = 0; i < temp.length; ++i) {
    let obj = temp[i];
    let a = new ProductItem(obj.image, obj.title, obj.price);
    pl.appendChild(a);
    let temp2 = a.shadowRoot.querySelector("li").querySelector("button"); 
    temp2.addEventListener("click", function() {
      if (temp2.textContent == "Add to Cart") {
        temp2.textContent = "Remove from Cart";
        arr[i] = 1;  
        count.textContent = parseInt(count.textContent) + 1;
      } else {
        temp2.textContent = "Add to Cart";
        arr[i] = 0;
        count.textContent = parseInt(count.textContent) - 1;
      }
    });
  }





});