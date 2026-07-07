function placeOrder() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || address === "" || phone === "") {
        document.getElementById("msg").innerText = "Please fill all fields.";
    } else {
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerAddress", address);
    localStorage.setItem("customerPhone", phone);

    alert("Order placed successfully!");

    window.location.href = "receipt.html";
    }
}