// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(img_src, title, price, index, arr, count, fromSt) {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('li');
    wrapper.setAttribute('class', 'product');
    
    const img = document.createElement('img');
    img.src = img_src;
    img.alt = title;
    img.width = 200;
    wrapper.appendChild(img);

    const p1 = document.createElement('p')
    p1.setAttribute('class', 'title')
    p1.textContent = title;
    wrapper.appendChild(p1);

    const p2 = document.createElement('p')
    p2.setAttribute('class', 'price')
    p2.textContent = price;
    wrapper.appendChild(p2);

    const btn = document.createElement('button')
    //btn.setAttribute('onclick', "clickthingy()");
    btn.textContent = "Add to Cart";

    if (fromSt && arr[index]) {
      btn.textContent = "Remove from Cart";
    }

    btn.addEventListener("click", clickthingy);

    // btn.onclick = clickthingy();

    function clickthingy() {
      if (btn.textContent == "Add to Cart") {
        console.log("came here");
        btn.textContent = "Remove from Cart";
        arr[index] = 1;
        arr[20] += 1;
        count.textContent = parseInt(count.textContent) + 1;
      } else {
        btn.textContent = "Add to Cart";
        arr[index] = 0;
        arr[20] -= 1;
        count.textContent = parseInt(count.textContent) - 1;
      }
      localStorage.setItem('count_array', JSON.stringify(arr));
    }

    wrapper.appendChild(btn);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    // attach the created elements to the shadow dom
    shadow.appendChild(wrapper);
    shadow.appendChild(style);
    

  }
}

customElements.define('product-item', ProductItem);