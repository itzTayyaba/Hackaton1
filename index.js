var cartItems = [];
var isTotalHidden = true;

var mi = {
  name: "mi",
  price: 10000,
};

var samsung = {
  name: "samsung",
  price: 20000,
};

function addToCart(item) {
  cartItems.push(item);

  // Update item counter
  document.getElementById("itemCounter").innerHTML = cartItems.length;

  // Log cart items (useful for debugging)
  console.log(cartItems);

  // Show total price
  showTotal();
}

function clickCart() {
  isTotalHidden = !isTotalHidden;
  showTotal();
}

function showTotal() {
  var orderTotal = document.getElementById("orderTotal");
  orderTotal.innerHTML = ""; // Clear previous content

  // Calculate the total price if not hidden
  if (!isTotalHidden) {
    var total = 0; // Corrected initialization
    for (var i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }
    orderTotal.innerHTML = "Total: $" + total; // Direct assignment
  }
}
