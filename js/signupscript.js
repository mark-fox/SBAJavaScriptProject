// RegEx statement for validating email addresses
const emailCheck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'g');


// Function ran at the start of the page
function startSignup() {
    document.getElementById("signupForm").addEventListener("submit", signup);
}


// Function called upon submitting Signup form
function signup(event) {
    event.preventDefault();

    let usernameSignup = document.getElementById("usernameSignup").value;
    let invalid = document.getElementById("invalidSignup");

    // Only checks if the input is an email for demonstration purposes
    if (emailCheck.test(usernameSignup)) {
        let pass1 = document.getElementById("passwordSignup").value;
        let pass2 = document.getElementById("passwordSignup2").value;   

        // Verifies both passwords match
        if (pass1 != "" && pass2 != "" && pass1 == pass2) {
            window.location.href = "./dashboard.html";
        } else {
            localStorage.setItem("login", "true");
            invalid.innerHTML = "Both password fields must match";
        }                
    } else {
        invalid.innerHTML = "Please enter a valid email address";
    }
}

startSignup();