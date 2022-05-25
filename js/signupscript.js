const emailCheck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g');

function startSignup() {
    document.getElementById("signupForm").addEventListener("submit", signup);
    console.log("startSignup reached");
}

function signup(event) {
    event.preventDefault();
    console.log("form submitted...");
    let usernameSignup = document.getElementById("usernameSignup").value;
    let invalid = document.getElementById("invalidSignup");
// TODO change back after testing
    console.log("username: " + typeof usernameSignup);
    console.log(emailCheck.test(usernameSignup));
    usernameSignup = "test@email.com";
    if (emailCheck.test(usernameSignup)) {
        console.log("checkpoint");
        let pass1 = document.getElementById("passwordSignup").value;
        let pass2 = document.getElementById("passwordSignup2").value;
        console.log(typeof pass1);
        console.log(typeof pass2);
        
        if (pass1 != "" && pass2 != "" && pass1 == pass2) {
            window.location.href = "./dashboard.html";
        } else {
            localStorage.setItem("login", "true");
            invalid.innerHTML = "Both password fields must match";
        }                
    } else {
        invalid.innerHTML = "Please enter a valid email address";
    }
    // alert("new account created");
}

startSignup();