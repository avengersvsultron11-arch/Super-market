function signup() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        document.getElementById("msg").innerText =
            "Please enter username and password.";
        return;
    }

    // Admin username is reserved
    if (username.toLowerCase() === "admin") {
        document.getElementById("msg").innerText =
            "The username 'admin' is reserved.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate username
    let exists = users.find(user => user.username === username);

    if (exists) {
        document.getElementById("msg").innerText =
            "Username already exists!";
        return;
    }

    // Save new user
    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful!");

    window.location.href = "login.html";
}