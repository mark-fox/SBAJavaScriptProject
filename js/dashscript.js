console.log("dashscript reached");
let tempdb;


function startDash() {    
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../tempdb.txt", false);
    console.log("what is rawFile: " + typeof rawFile); 
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText;
                // alert(allText);
                // let arr = allText.split("\n");
                // for (let i = 0; i < arr.length; i++) {
                //     console.log(arr[i]);
                // }
                tempdb = allText.split("\n");
                
                console.log(checkForAdd());
                if (checkForAdd()) {
                    tempdb.push(localStorage.getItem("addpatient"));
                    localStorage.setItem("addpatient", "");
                }

                for (let i = 0; i < tempdb.length; i++) {
                    let newRow = document.getElementById("patientTable").insertRow(i+1);
                    let rowArr = tempdb[i].split(",");
                    
                    for (let j = 0; j < rowArr.length; j++) {
                        // let x = newRow.insertCell(j);
                        newRow.insertCell(j).innerHTML = rowArr[j];
                    }
                }
            }
        }
    }
    rawFile.send(null);
    // console.log(tempdb);
}

function checkForAdd() {
    let newpatient = localStorage.getItem("addpatient");
    console.log("newpatient: " + newpatient);
    if (newpatient != "") {
        return true;
    } else {
        return false;
    }
    
}



startDash();


// Sourse:
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file