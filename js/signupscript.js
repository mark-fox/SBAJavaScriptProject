

function startSignup() {
    document.getElementById("signupForm").addEventListener("submit", signup);
    console.log("startSignup reached");
}

function signup(event) {
    event.preventDefault();
    console.log("form submitted...");
    window.location.href = "./dashboard.html";
    // alert("new account created");
}

startSignup();