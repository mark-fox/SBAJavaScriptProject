console.log("addscript reached...");

function startAdd() {
    document.getElementById("addpatientForm").addEventListener("submit", addPatient);
}



function addPatient(event) {
    event.preventDefault();
    console.log("add button pressed");
    let patient = "testpatient"; // document.getElementById("patientName").value;
    let doctor = "testdoctor"; // document.getElementById("doctorName").value;
    let birthdate = document.getElementById("birthdate").value;
    console.log("birthdate type: " + typeof birthdate);
    let height = document.getElementById("patientHeight").value;
    let weight = document.getElementById("patientWeight").value;

    if (patient != "" && doctor != "") {

    } else {

    }
    console.log("what is in storage");
    console.log(localStorage.getItem("patients"));
    let db = localStorage.getItem("patients");
    if (db != "" && db != null && db != undefined) {
        let id = findNextId(db);
        updateDb(db, id, patient, doctor);
    }
    // localStorage.setItem("addpatient", "15,patient0,drzero");
    // TODO REDIRECT
}



function findNextId(db) {
    let id = 45;
    console.log(typeof id);
    while (db.includes(id.toString())) {
        id++;
        console.log("in loop: " + typeof id);
    }
    console.log("after loop: " +  id);
    return id;
}



function updateDb(db, id, patient, doctor) {
    // let arr = db.split(";");
// TODO do i need to add newline as well?
    let str = db + ";" + id + "," + patient + "," + doctor;
    // arr.push(id+ "," + patient + "," + doctor);
    localStorage.setItem("patients", str); //JSON.stringify(arr));
    console.log("after update:");
    console.log(localStorage.getItem("patients"));
}



startAdd();