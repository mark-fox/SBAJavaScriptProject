// Starting function
function startAdd() {
    document.getElementById("addpatientForm").addEventListener("submit", addPatient);
}


// Function called upon submitting form
function addPatient(event) {
    event.preventDefault();

    let patient = document.getElementById("patientName").value;
    let doctor = document.getElementById("doctorName").value;
    let birthdate = document.getElementById("birthdate").value;
    let height = document.getElementById("patientHeight").value;
    let weight = document.getElementById("patientWeight").value;

    if (patient != "" && doctor != "") {
        let db = localStorage.getItem("patients");
        if (db != "" && db != null && db != undefined) {
            let id = findNextId(db);
            updateDb(db, id, patient, doctor);
        }
        window.location.href = "./dashboard.html";
    }
}


// Method to "autoincrement" IDs
function findNextId(db) {
    let id = 45;
    while (db.includes(id.toString())) {
        id++;
    }
    return id;
}


// Function to update localStorage
function updateDb(db, id, patient, doctor) {
    // Creates string for localStorage
    let str = db + ";" + id + "," + patient + "," + doctor;
    localStorage.setItem("patients", str); 
}



startAdd();