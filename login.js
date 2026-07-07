function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Admin Login
    if (username === "admin" && password === "admin123") {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedInUser", "admin");

        alert("Welcome Admin!");

        window.location.href = "admin.html";

        return;
    }

    // Normal User Login
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = users.find(user =>
        user.username === username &&
        user.password === password
    );

    if (found) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedInUser", username);

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        document.getElementById("msg").innerText =
            "Invalid Username or Password";
    }

}