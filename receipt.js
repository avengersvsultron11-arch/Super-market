let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("rname").innerText =
localStorage.getItem("customerName");

document.getElementById("raddress").innerText =
localStorage.getItem("customerAddress");

document.getElementById("rphone").innerText =
localStorage.getItem("customerPhone");

// Date & Time
let now = new Date();
let currentDate = now.toLocaleDateString();
let currentTime = now.toLocaleTimeString();

document.getElementById("date").innerText = currentDate;
document.getElementById("time").innerText = currentTime;

// Receipt ID
let receiptId = "FM" + Math.floor(Math.random() * 100000);
document.getElementById("orderId").innerText = receiptId;

let products = document.getElementById("products");
let total = 0;
let productList = [];

cart.forEach(item => {

  products.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;

    productList.push(item.name + " - " + item.price);

    total += parseInt(item.price.replace(/[^\d]/g, ""));
});

document.getElementById("total").innerText =
"Total: ₹" + total;

// Logged in user
let username = localStorage.getItem("loggedInUser");

// Receipt object
let receiptData = {

    username: username,

    id: receiptId,

    customer: localStorage.getItem("customerName"),

    address: localStorage.getItem("customerAddress"),

    phone: localStorage.getItem("customerPhone"),

    date: currentDate,

    time: currentTime,

    total: total,

    products: productList

};

// Save to user's history
let userHistory =
JSON.parse(localStorage.getItem(username + "_history")) || [];

userHistory.push(receiptData);

localStorage.setItem(
username + "_history",
JSON.stringify(userHistory)
);

// Save to admin history
let allHistory =
JSON.parse(localStorage.getItem("allHistory")) || [];

allHistory.push(receiptData);

localStorage.setItem(
"allHistory",
JSON.stringify(allHistory)
);

// Clear cart
localStorage.removeItem("cart");

function goHome() {
    window.location.href = "index.html";
}