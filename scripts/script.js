// Script.js


window.addEventListener('DOMContentLoaded', () => {
  // TODO

  // let fetchedResponse;
  // let url = 'https://fakestoreapi.com/products';
  // let myStorage = window.localStorage;

  //if (myStorage.getItem('apiResponse') === null) {
    // fetch(url)
    //   .then(function (response) {
    //     fetchedResponse = response.json();
    //     myStorage.setItem('apiResponse', fetchedResponse);
    //   })
    //   .catch(function () {

    //   });

    // fetch('https://fakestoreapi.com/products')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('products', JSON.stringify(data)));

  //}
  
});