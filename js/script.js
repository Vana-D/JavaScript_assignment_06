// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('form');
const table = document.querySelector('table');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId       = document.getElementById('id').value;
    let empName     = document.getElementById('name').value;
    let empExt      = document.getElementById('extension').value;
    let empEmail    = document.getElementById('email').value;
    let empDept     = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row         = table.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId      = row.insertCell();
    let cellName    = row.insertCell();
    let cellExt     = row.insertCell();
    let cellEmail   = row.insertCell();
    let cellDept    = row.insertCell();
    let cellBtn     = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newId       = document.createTextNode(empId);
    let newName     = document.createTextNode(empName);
    let newExt      = document.createTextNode(empExt);
    let newEmail    = document.createTextNode(empEmail);
    let newDept     = document.createTextNode(empDept);
    
    cellId.appendChild(newId);
    cellName.appendChild(newName);
    cellExt.appendChild(newExt);
    cellEmail.appendChild(newEmail);
    cellDept.appendChild(newDept);

    //  CREATE THE DELETE BUTTON
    let deleteBtn           = document.createElement('button');
    //  ADD BOOTSTRAP CLASSES TO FORMAT BTN
    deleteBtn.className     = 'btn btn-danger btn-sm text-white';
    //  ADD TEXT WITHIN THE BTN
    let textDelete          = document.createTextNode('X');
    
    deleteBtn.appendChild(textDelete);
    cellBtn.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('input').focus();
    
    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count = document.querySelector('table').rows.length - 1;
    countEmployees();
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    //  CHECK AND SEE IF DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('btn-danger')) {
    // DISPLAY CONFIRMATION OF DELETE TO THE USER
    if (confirm( `Are you sure you want to delete this employee?`)){
        // REMOVE THE SELECTED ROW INDEX FROM TABLE
        table.deleteRow(e.target.parentNode.parentNode.rowIndex);
        count = document.querySelector('table').rows.length - 1;
        countEmployees();
        }
    }
});

// FUNCTION TO DISPLAY EMPLOYEE COUNT RECORDS
function countEmployees() {
    empCount = document.getElementById('empCount');
    empCount.innerHTML = `(${count})`;
}









