// Function ran at the start of the page
function startDash() {    
    document.getElementById("searchBtn").onclick = runSearch;


    // Starts reading data from text file (temporary database)
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../tempdb.txt", false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText;
                let tempdb;

                // Checks if localStorage is empty and generates table data from text file (temporary)
                if (localStorage.getItem("patients") == null || 
                localStorage.getItem("patients") == undefined || 
                localStorage.getItem("patients") == "") {
                    // Creates a string of all returned data since localStorage can't hold arrays
                    let dbStr = allText.split("\n").join(';');
                    
                    // Updates localStorage
                    localStorage.setItem("patients", dbStr); 
                    tempdb = localStorage.getItem("patients").split(";");
                } else {
                    tempdb = localStorage.getItem("patients").split(";");
                }
                // Loops through array and adds elements to the table
                for (let i = 0; i < tempdb.length; i++) {
                    let newRow = document.getElementById("patientTable").insertRow(i+1);
                    let rowArr = tempdb[i].split(",");
                    for (let j = 0; j < rowArr.length; j++) {
                        newRow.insertCell(j).innerHTML = rowArr[j];
                    }
                }
            }
        }
    }
    rawFile.send(null);
}


// Function for grabbing the search field data
// Currently, only displays the input values
function runSearch() {
    let menu = document.getElementById("searchMenu");
    let choiceTxt = menu.options[menu.selectedIndex].text;
    let resultsBox = document.getElementById("searching");
    let searchText = document.getElementById("searchInput").value;
    let str = "Searching for: ";
    let choice = parseInt(menu.value);

    // Inputs' value fields contain a number
    if (choice > 0) {
        str = str + choiceTxt + " = " + searchText;
    } else {
        str = "";
    }
    resultsBox.innerHTML = str;
}


startDash();


// Sourse for reading from text file:
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file