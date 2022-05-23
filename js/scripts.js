console.log("js page reached");

function startup() {
    // const loginButton = document.getElementById("loginBtn");
    // loginButton.onclick = login();
    let signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", signup);
}

function login () {
    console.log("login function reached...");
    let username = document.getElementById("usernameLogin").value;
    window.location.href="/pages/dashboard.html";
    console.log(username);
}

function signup(event) {
    event.preventDefault();
    console.log("form submitted...");
    window.location = "./dashboard.html";
    // alert("new account created");
}



startup();