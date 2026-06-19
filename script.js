// ===== Sidebar =====

function toggleSidebar(){

  document
  .getElementById("sidebar")
  .classList
  .toggle("active");

}

// ===== Cart =====

function toggleCart(){

  document
  .getElementById("cartSidebar")
  .classList
  .toggle("active");

}

// ===== Home =====

function showHome(){

  document.getElementById("homePage").style.display = "block";

  document.getElementById("accountPage").style.display = "none";

  document.getElementById("orderPage").style.display = "none";

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

}

// ===== Account =====

function showAccount(){

  document.getElementById("homePage").style.display = "none";

  document.getElementById("accountPage").style.display = "flex";

  document.getElementById("orderPage").style.display = "none";

  toggleSidebar();

}

// ===== Trending Scroll =====

function scrollToTrending(){

  document
  .getElementById("trendingSection")
  .scrollIntoView({

    behavior:"smooth"

  });

}

// ===== Products =====

const products = [];

for(let i = 1; i <= 50; i++){

  products.push({

    name:`Fashion Tee ${i}`,

    price:`$${20 + i}`,

    image:`https://picsum.photos/400/500?random=${i}`

  });

}

// ===== Load Products =====

const productGrid =
document.getElementById("productGrid");

function loadProducts(items){

  productGrid.innerHTML = "";

  items.forEach((product) => {

    productGrid.innerHTML += `

      <div class="product glass">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>${product.price}</p>

        <button
          class="dark-btn"
          onclick="addToCart('${product.name}','${product.price}','${product.image}')">

          Add To Cart

        </button>

      </div>

    `;

  });

}

loadProducts(products);

// ===== Search =====

function searchProducts(){

  const input =
  document
  .getElementById("searchInput")
  .value
  .toLowerCase();

  const filtered =
  products.filter((product) =>

    product.name.toLowerCase().includes(input)

  );

  loadProducts(filtered);

}

// ===== Cart =====

let cart = [];

function addToCart(name, price, image){

  cart.push({name, price, image});

  updateCart();

  toggleCart();

}

// ===== Update Cart =====

function updateCart(){

  const cartItems =
  document.getElementById("cartItems");

  if(cart.length === 0){

    cartItems.innerHTML = `

      <div class="empty-cart">

        <i class="fa-solid fa-cart-shopping"></i>

        <h3>Cart is Empty</h3>

      </div>

    `;

    return;

  }

  cartItems.innerHTML = "";

  cart.forEach((item) => {

    cartItems.innerHTML += `

      <div class="cart-item"
        onclick="openOrderPage('${item.name}','${item.price}','${item.image}')">

        <h4>${item.name}</h4>

        <p>${item.price}</p>

      </div>

    `;

  });

}

// ===== Order Page =====

function openOrderPage(name, price, image){

  document.getElementById("homePage").style.display = "none";

  document.getElementById("accountPage").style.display = "none";

  document.getElementById("orderPage").style.display = "flex";

  document.getElementById("orderTitle").innerText = name;

  document.getElementById("orderPrice").innerText = price;

  document.getElementById("orderImage").src = image;

  toggleCart();

}