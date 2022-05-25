console.log("aboutjs reached");

function startAbout() {
    console.log(localStorage.getItem("login"));
    if (localStorage.getItem("login") == "false") {
        console.log("about checkpoint");
        document.getElementById("aboutHome").setAttribute("href", "../index.html");
        document.getElementById("aboutAdd").style.display = "none";
        document.getElementById("aboutLogout").style.display = "none";
    }
}


startAbout();