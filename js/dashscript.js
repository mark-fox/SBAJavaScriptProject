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
                console.log(localStorage.getItem("patients"));

                if (localStorage.getItem("patients") == null || localStorage.getItem("patients") == undefined || localStorage.getItem("patients") == "") {

                tempdb = allText.split("\n");
                let tempdb2 = tempdb.join(';'); //JSON.stringify(tempdb); //tempdb.join(";");
                console.log(tempdb2);
// TODO if time, add .contains validation
                console.log("current storage is:");
                console.log(localStorage.getItem("patients"));
                
                // if (localStorage.getItem("patients") == null) {
                    localStorage.setItem("patients", tempdb2); //allText.join("\n")); //.split("\n"));
                // }
                tempdb = localStorage.getItem("patients").split(";");
                console.log(tempdb);
                console.log("storage after:");
                console.log(localStorage.getItem("patients"));
                // console.log(checkForAdd());
                // if (checkForAdd()) {
                //     tempdb.push(localStorage.getItem("addpatient"));
                //     localStorage.setItem("addpatient", "");
                // }

                } else {
                    tempdb = localStorage.getItem("patients").split(";");
                }

                console.log(tempdb);

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

// function checkForAdd() {
//     let newpatient = localStorage.getItem("addpatient");
//     console.log("newpatient: " + newpatient);
//     if (newpatient != "") {
//         return true;
//     } else {
//         return false;
//     }
    
// }



startDash();


// Sourse:
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file