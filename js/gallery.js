let cart = [];
const seshStorage = window.sessionStorage.getItem("cart");
if (seshStorage) {
  cart = JSON.parse(seshStorage);
  readStorage();
} else {
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
}

function readStorage() {
  const container = document.querySelector(".modal-body");
  if (container) {
    container.innerHTML = "";

    for (const item in cart) {
      const itemContainer = document.createElement("div");
      itemContainer.innerHTML = `${cart[item]}`;
      container.appendChild(itemContainer);
    }
  }
}

function addToCart(event, item) {
  event.stopPropagation();

  cart.push(item);
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
  readStorage();

  alert("Item: " + item + " added to cart!");
}

function clearCart() {
  const container = document.querySelector(".modal-body");
  if (cart.length === 0) {
    alert("No items to clear");
    return;
  }
  cart = [];
  if (container)
    container.innerHTML = '<div class="body">No items in cart </div>';
  alert("Cart cleared!");
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
}

function processOrder() {
  const container = document.querySelector(".modal-body");
  if (cart.length === 0) {
    alert("No items in cart");
    return;
  }
  if (container)
    container.innerHTML = '<div class="body">No items in cart </div>';
  alert("Order processed!");
  cart = [];
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
}
