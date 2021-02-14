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
  }

  while (myStorage.getItem('products') === null) {}

  let fromSt = false;
  if (myStorage.getItem('count_array') === null) {
    myStorage.setItem('count_array', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  } else {
    fromSt = true;
  }

  let temp = JSON.parse(myStorage.getItem('products'));
  let arr = JSON.parse(myStorage.getItem('count_array'));

  let pl = document.getElementById('product-list');

  let count = document.getElementById('cart-count');
  
  count.textContent = arr[20];
  
  for (let i = 0; i < temp.length; ++i) {
    let obj = temp[i];
    let a = new ProductItem(obj.image, obj.title, obj.price);
    pl.appendChild(a);
    let temp2 = a.shadowRoot.querySelector("li").querySelector("button"); 
    if (fromSt) {
      if (arr[i] == 1) {
        temp2.textContent = "Remove from Cart";
      }
    }
    temp2.addEventListener("click", function() {
      if (temp2.textContent == "Add to Cart") {
        temp2.textContent = "Remove from Cart";
        arr[i] = 1;  
        arr[20] += 1;
        count.textContent = parseInt(count.textContent) + 1;
      } else {
        temp2.textContent = "Add to Cart";
        arr[i] = 0;
        arr[20] -= 1;
        count.textContent = parseInt(count.textContent) - 1;
      }
      myStorage.setItem('count_array', JSON.stringify(arr));
    });
  }





});