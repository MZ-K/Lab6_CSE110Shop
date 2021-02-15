// Script.js


window.addEventListener('DOMContentLoaded', () => {
  // TODO

  //let myStorage = window.localStorage;

  //myStorage.removeItem('products');
  //myStorage.removeItem('count_array');

  let fromSt = false;
  if (localStorage.getItem('count_array') === null) {
    console.log("came here");
    localStorage.setItem('count_array', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  } else {
    fromSt = true;
  }

  if (localStorage.getItem('products') === null) {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('products', JSON.stringify(data));
        let temp = JSON.parse(localStorage.getItem('products'));
        let arr = JSON.parse(localStorage.getItem('count_array'));

        let pl = document.getElementById('product-list');
        let count = document.getElementById('cart-count');

        count.textContent = arr[20];

        

        for (let i = 0; i < temp.length; ++i) {
          let obj = temp[i];
          console.log(obj);
          let a = new ProductItem(obj.image, obj.title, obj.price, i, arr, count, fromSt);
          console.log(JSON.stringify(a));
          pl.appendChild(a);
          
        }

      }); 
  } else {
    let temp = JSON.parse(localStorage.getItem('products'));
    let arr = JSON.parse(localStorage.getItem('count_array'));

    let pl = document.getElementById('product-list');
    let count = document.getElementById('cart-count');

    count.textContent = arr[20];

    for (let i = 0; i < temp.length; ++i) {
      let obj = temp[i];
      console.log(obj);
      let a = new ProductItem(obj.image, obj.title, obj.price, i, arr, count, fromSt);
      console.log(JSON.stringify(a));
      pl.appendChild(a);

    }
  }

  

});