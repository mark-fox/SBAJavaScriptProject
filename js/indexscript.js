console.log("js page reached");
const emailCheck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g');

function startup() {
    console.log("startup reached...");
    document.getElementById("loginForm").addEventListener("submit", login);
}

function login (event) {
    event.preventDefault();
    const name = "a@email.com";
    const pass = "b";
    console.log("login function reached...");
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;

    // console.log(emailCheck.test(username));

    if (username == name && password == pass && emailCheck.test(username)) {
        window.location.href="./pages/dashboard.html";
    } else {
        document.getElementById("invalidLogin").innerHTML = "Invalid Username/Password";
    }    
    // console.log(username);
    // console.log(password);
}





startup();