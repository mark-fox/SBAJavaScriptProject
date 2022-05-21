console.log("js page reached");

// function startup() {
//     const loginButton = document.getElementById("loginBtn");
//     loginButton.onclick = login();
// }

function login () {
    console.log("login function reached...");
    let username = document.getElementById("usernameLogin").value;
    window.location.href="/pages/dashboard.html";
    console.log(username);
}
// startup();