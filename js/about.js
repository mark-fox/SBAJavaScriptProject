// Starting function
function startAbout() {
    // Checks if user is logged in and hides/unhides elements based on that
    if (localStorage.getItem("login") == "false") {
        document.getElementById("aboutHome").setAttribute("href", "../index.html");
        document.getElementById("aboutAdd").style.display = "none";
        document.getElementById("aboutLogout").style.display = "none";
    }
}


startAbout();