console.log("dashscript reached");
let tempdb;


function startDash() {    
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../tempdb.txt", false);
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




startDash();


// Sourse:
// https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file