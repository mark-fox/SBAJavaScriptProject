console.log("js page reached");

function startup() {
    console.log("startup reached...");
    document.getElementById("loginForm").addEventListener("submit", login);
}

function login (event) {
    event.preventDefault();
    console.log("login function reached...");
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;
    // window.location.href="./pages/dashboard.html";
    console.log(username);
    console.log(password);
}





startup();