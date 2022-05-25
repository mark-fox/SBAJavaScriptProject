console.log("addscript reached...");

function startAdd() {
    document.getElementById("addpatientForm").addEventListener("submit", addPatient);
}

function addPatient(event) {
    event.preventDefault();
    console.log("add button pressed");
    let patient = document.getElementById("patientName").value;
    let doctor = document.getElementById("doctorName").value;
    let birthdate = document.getElementById("birthdate").value;
    console.log("birthdate type: " + typeof birthdate);
    let height = document.getElementById("patientHeight").value;
    let weight = document.getElementById("patientWeight").value;

    if (patient != "" && doctor != "") {

    } else {

    }
    localStorage.setItem("addpatient", "15,patient0,drzero");
    // TODO REDIRECT
}
startAdd();