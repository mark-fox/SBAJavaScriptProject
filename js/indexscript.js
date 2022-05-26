// RegEx statement for validating email addresses
const emailCheck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g');

// Function ran at the start of the page
function startup() {
    document.getElementById("loginForm").addEventListener("submit", login);
}

// Function called upon submitting Login form
function login (event) {
    event.preventDefault();
    // Static credentials for demonstration purposes
    const name = "test@email.com";
    const pass = "password";
    
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;

    // Verifies the inputs match a static
    if (username == name && password == pass && emailCheck.test(username)) {
        // Sets localStorage and redirects
        localStorage.setItem("login", "true");
        window.location.href="./pages/dashboard.html";
    } else {
        // Fills element with text about error
        document.getElementById("invalidLogin").innerHTML = "Invalid Username/Password";
    }    
}

// For testing purposes to reset localStorage
function reset () {
    localStorage.setItem("patients", "");
    localStorage.setItem("login", "false");
}
// reset();



startup();