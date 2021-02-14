// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(img_src, title, price) {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('li');
    wrapper.setAttribute('class', 'product');
    
    let img = document.createElement('img');
    img.src = img_src;
    wrapper.appendChild(img);

    let p1 = document.createElement('p')
    p1.setAttribute('class', 'title')
    p1.textContent = title;
    wrapper.appendChild(p1);

    let p2 = document.createElement('p')
    p1.setAttribute('class', 'price')
    p1.textContent = price;
    wrapper.appendChild(p2);

    let btn = document.createElement('button')
    p1.setAttribute('onclick', "alert('Added to cart!')");
    p1.textContent = "Add to Cart";
    wrapper.appendChild(btn);

    // Create some CSS to apply to the shadow dom
    let style = document.createElement('style');
    style.textContent = `
    .price {
        color: green;
        font - size: 1.8em;
        font - weight: bold;
        margin: 0;
      }

    .product {
      align - items: center;
      background - color: white;
      border - radius: 5px;
      display: grid;
      grid - template - areas:
      'image'
      'title'
      'price'
      'add';
      grid - template - rows: 67 % 11 % 11 % 11 %;
      height: 450px;
      filter: drop - shadow(0px 0px 6px rgb(0, 0, 0, 0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background - color: rgb(255, 208, 0);
      border: none;
      border - radius: 5px;
      color: black;
      justify - self: center;
      max - height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button: hover {
      background - color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align - self: center;
      justify - self: center;
      width: 100 %;
    }

    .title {
      font - size: 1.1em;
      margin: 0;
      overflow: hidden;
      text - overflow: ellipsis;
      white - space: nowrap;
    }

    .title: hover {
      font - size: 1.1em;
      margin: 0;
      white - space: wrap;
      overflow: auto;
      text - overflow: unset;
    }`;

    // attach the created elements to the shadow dom
    shadow.appendChild(style, wrapper)

  }
}

customElements.define('product-item', ProductItem);