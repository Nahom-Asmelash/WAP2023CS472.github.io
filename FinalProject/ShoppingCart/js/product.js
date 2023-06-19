 
document.addEventListener("DOMContentLoaded", loadProducts);

let dbProduct = [];
let localStorageCart = [];

const loadProductUrl = "http://localhost:1500/products";
const hostUrl = "http://localhost:1500";
const placeOrderUrl = "http://localhost:1500/products/placeorder";


document.addEventListener("DOMContentLoaded", function() {
    // Initialize Toastr
    toastr.options = {
      closeButton: true,
      progressBar: true,
      timeOut: 4000 // 3 seconds
    };
  });

     


function loadProducts() {
  debugger
  const identity = JSON.parse(sessionStorage.getItem("IdentityContext"));
  document.getElementById("loginUserName").innerHTML =
    "Welcome, " + identity.fullName 
  fetch(loadProductUrl, {
    headers: {
      "x-access-token": `${identity.token}`,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        sessionStorage.setItem("products", JSON.stringify(data));
        dbProduct = data;
        renderProductData(data);
        //loadExistingCartTable();
      }
    });
}

let cart = [];

function placeOrdersInCart(item) {
  if (!cart[item.id]) cart[item.id] = { ...item, orderCount: 1 };
  else cart[item.id].orderCount += 1;
  loadCartTable();
}

function renderProductData(data) {
  let rows = "";
  for (const item of data) {
    let imgUrl = hostUrl + item.imageUrl; 
    rows += `<tr id="${item.id}">
          <td >${item.title}</td>
          <td >${item.price}</td>
          <td ><img src="${imgUrl}" width="100px"></td>
          <td id="${item.id}-stock">${
      item.quantity === 0 ? "Out of Stock" : item.quantity
    }</td>
          <td ><button class="btn" onclick='placeOrdersInCart(${JSON.stringify(
            item
          )})' ${item.stock === 0 ? "disabled" : ""}>
          <i class="fa fa-cart-shopping" style="color: #f28507;"> Add to cart </i></button></td>
          </tr>`;
  }
  document.getElementById("tbl-product-body").innerHTML = rows;
}

// function placeOrdersInCartStorage(item) {
//   const identity = JSON.parse(sessionStorage.getItem("IdentityContext"));
//   localStorage.setItem(identity.username, JSON.stringify(item));
// }

function loadCartTable() {
  let tblCart = document.getElementById("tbl-cart");
  if (tblCart.classList.contains("hide")) tblCart.classList.remove("hide");
  //let cartMsg = document.getElementById("cartMsg");
  //cartMsg.innerHTML = "";
  let btnSubmit = document.getElementById("btnPlaceOrder");
  if (btnSubmit.classList.contains("hide")) {
    btnSubmit.classList.remove("hide");
  }
  const tbodyCart = document.getElementById("tbl-cart-body");
  tbodyCart.innerHTML = "";
  let totalCost = 0;

  for (const index in cart) {
    const row = document.createElement("tr");
    const item = cart[index];

    localStorageCart.push(item);
    const nameCell = document.createElement("td");
    nameCell.innerText = item.title;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.innerText = item.price;
    row.appendChild(priceCell);

    const totalCell = document.createElement("td");
    totalCell.innerText = item.orderCount * item.price;
    row.appendChild(totalCell);
    totalCost += item.orderCount * item.price;

    const quantityCell = document.createElement("td");
    const minusBtn = document.createElement("button");
    minusBtn.innerText = "-";
    minusBtn.onclick = () => updateItemCount(item, -1);
    quantityCell.appendChild(minusBtn);

    const quantityInput = document.createElement("input");
    quantityInput.style.width = "60px";
    quantityInput.type = "text";
    quantityInput.value = item.orderCount;
    quantityInput.style.paddingLeft = "5px";
    quantityInput.style.paddingRight = "5px";
    quantityInput.style.textAlign = "center";
    quantityInput.onchange = (e) =>
      updateItemCount(item, 0, parseInt(e.target.value));
    quantityCell.appendChild(quantityInput);

    const plusBtn = document.createElement("button");
    plusBtn.innerText = "+";
    plusBtn.onclick = () => updateItemCount(item, 1);
    quantityCell.appendChild(plusBtn);

    row.appendChild(quantityCell);

    tbodyCart.appendChild(row);
  }
  //placeOrdersInCartStorage(localStorageCart);
  const totalCostElement = document.getElementById("totalCost");
  totalCostElement.innerText = "Total Cost: $" + totalCost.toFixed(2);
}

function loadExistingCartTable() {
  let totalCost = 0;
  let tblCart = document.getElementById("tbl-cart");
  if (tblCart.classList.contains("hide")) tblCart.classList.remove("hide");

  let btnSubmit = document.getElementById("btnPlaceOrder");
  if (btnSubmit.classList.contains("hide")) {
    btnSubmit.classList.remove("hide");
  }
  const tbodyCart = document.getElementById("tbl-cart-body");
  tbodyCart.innerHTML = "";
  // Retrieve cart data from localStorage
  const identity = JSON.parse(sessionStorage.getItem("IdentityContext"));
  const storedCart = JSON.parse(localStorage.getItem(identity.username));

  if (storedCart) {
    for (const index in storedCart) {
      const row = document.createElement("tr");
      const item = storedCart[index];
      const nameCell = document.createElement("td");
      nameCell.innerText = item.title;
      row.appendChild(nameCell);

      const priceCell = document.createElement("td");
      priceCell.innerText = item.price;
      row.appendChild(priceCell);

      const totalCell = document.createElement("td");
      totalCell.innerText = item.orderCount * item.price;
      row.appendChild(totalCell);
      totalCost += item.orderCount * item.price;

      const quantityCell = document.createElement("td");
      const minusBtn = document.createElement("button");
      minusBtn.innerText = "-";
      minusBtn.onclick = () => updateItemCount(item, -1);
      quantityCell.appendChild(minusBtn);

      const quantityInput = document.createElement("input");
      quantityInput.style.width = "60px";
      quantityInput.type = "text";
      quantityInput.value = item.orderCount;
      quantityInput.style.paddingLeft = "5px";
      quantityInput.style.paddingRight = "5px";
      quantityInput.style.textAlign = "center";
      quantityInput.onchange = (e) =>
        updateItemCount(item, 0, parseInt(e.target.value));
      quantityCell.appendChild(quantityInput);

      const plusBtn = document.createElement("button");
      plusBtn.innerText = "+";
      plusBtn.onclick = () => updateItemCount(item, 1);
      quantityCell.appendChild(plusBtn);

      row.appendChild(quantityCell);

      tbodyCart.appendChild(row);
    }
  }
  //tbd

  const totalCostElement = document.getElementById("totalCost");
  totalCostElement.innerText = "Total Cost: $" + totalCost.toFixed(2);
}

function updateItemCount(item, change, newValue) {
  if (cart[item.id]) {
    if (newValue !== undefined) cart[item.id].orderCount = newValue;
    else {
      let idx = dbProduct.findIndex((x) => x.id == item.id);
      if (dbProduct[idx].quantity > cart[item.id].orderCount) {
        cart[item.id].orderCount += change;
      } else {
        // alert("Out of Stock");
        toastr.warning("The product is out of stock");
      }
    }
  }
  if (cart[item.id] && cart[item.id].quantity < 1)
    cart = cart.filter((x) => x.id != item.id);

  loadCartTable();
}

function postPlaceOrder() {
  const dataToPost = Object.values(cart);
  if (cart.filter((x) => x.orderCount === 0).length === cart.length) {
    toastr.warning("The product quantity cannot be less than 1");
    return;
  }
  fetch(placeOrderUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${
        JSON.parse(sessionStorage.getItem("IdentityContext")).token
      }`,
    },
    body: JSON.stringify(dataToPost),
  })
    .then((response) => response.json())
    .then((data) => {
      cart = [];
      const identity = JSON.parse(
        sessionStorage.getItem("IdentityContext")
      ).username;
      localStorage.removeItem(identity);
      loadCartTable();
      loadProducts();
      let tblCart = document.getElementById("tbl-cart");
      if (!tblCart.classList.contains("hide")) {
        tblCart.classList.add("hide");

        let btnSubmit = document.getElementById("btnPlaceOrder");
        if (!btnSubmit.classList.contains("hide")) {
          btnSubmit.classList.add("hide");
        }

        //let cartMsg = document.getElementById("cartMsg");
        //cartMsg.innerHTML = "There is no item in your shopping cart!";
      }
    })
    .catch((error) => {
      console.log(error);
      toastr.error(error);
    });
}

const submitButton = document.getElementById("logout");

submitButton.addEventListener("click", logOut);

function logOut(event) {
  event.preventDefault();
  sessionStorage.clear();
 // localStorage.clear();
  window.location.href = "login.html";
}
