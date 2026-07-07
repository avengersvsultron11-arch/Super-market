if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: "₹" + price + " / kg"
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}


let cartItems = document.getElementById("cart-items");
let total = document.getElementById("total");

if (cartItems) {

    cartItems.innerHTML = "";

    let amount = 0;

    cart.forEach((item) => {

        let div = document.createElement("div");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <hr>
        `;

        cartItems.appendChild(div);

        amount += Number(item.price.replace("₹","").replace("/ kg",""));
    });

    total.innerText = "Total: ₹" + amount;
}
const searchBox = document.getElementById("search");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {

        let value = searchBox.value.toLowerCase();

        document.querySelectorAll(".card").forEach((card) => {

            let name = card.querySelector("h3").innerText.toLowerCase();

            if (name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}
function filterProducts(category) {

    const products = document.querySelectorAll(".card");

    products.forEach((product) => {

        let type = product.getAttribute("data-category");

        if (category === "all" || type === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("cart");
    window.location.href = "login.html";
}
function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}