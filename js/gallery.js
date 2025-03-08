let cart = [];

function addToCart(event, item) {
  event.stopPropagation();
  const container = document.querySelector(".modal-body");
  container.innerHTML = "";

  alert("Item: " + item + " added to cart!");
  cart.push(item);

  for (const item in cart) {
    const itemContainer = document.createElement("div");
    itemContainer.innerHTML = `${cart[item]}`;
    container.appendChild(itemContainer);
  }
}

function clearCart() {
  const container = document.querySelector(".modal-body");
  if (cart.length === 0) {
    alert("No items to clear");
    return;
  }
  cart = [];
  container.innerHTML = '<div class="body">No items in cart </div>';
  alert("Cart cleared!");
}

function processOrder() {
  const container = document.querySelector(".modal-body");
  if (cart.length === 0) {
    alert("No items in cart");
    return;
  }
  container.innerHTML = '<div class="body">No items in cart </div>';
  alert("Order processed!");
  cart = [];
}
