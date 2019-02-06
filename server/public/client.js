console.log('client.js is loaded');


$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');
                              
    $('#submitButton').on('click', handleSubmitClick);
    $('#totalMonthlyDiv').text(totalMonthly);
    $('#employeeTable').on('click', '.deleteButton' , deleteFunct);

    addObjectsToTable();
    addingTotals();
}

class Employee {
	constructor(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput) {
		this.firstName = firstNameInput;
		this.lastName = lastNameInput;
		this.id = idInput;
        this.title = titleInput; 
        this.annualSalary = annualSalaryInput; 
    }}
    
    const jen = { firstName: 'Jen', lastName: 'Barber', id: '4521', title: 'Team Lead', annualSalary: 80000};
    const maurice = { firstName: 'Maurice',lastName: 'Moss', id: '8724', title: 'Support Lead', annualSalary: 58000};
    const roy = { firstName: 'Roy', lastName: 'Smith', id: '9623', title: 'Quality Assurance', annualSalary: 48000};
    
    const employeeObjects = [jen, maurice, roy];

// add employees to the table
function addObjectsToTable() {
    console.log('adding Objects to the table');
    

    for (let i = 0; i < employeeObjects.length; i++) {
    
        employeeObjects[i]
        $('#employeeTableBody').append(
        
            `<tr>
                <td> ${employeeObjects[i].firstName} </td>
                <td> ${employeeObjects[i].lastName} </td> 
                <td> ${employeeObjects[i].id} </td>
                <td> ${employeeObjects[i].title} </td>
                <td>$${(employeeObjects[i].annualSalary).toFixed(2)} </td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>`
            )
    }

}
  
let newEmployee
function handleSubmitClick () {
    console.log('you clicked me');


    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idIn = $('#ID').val();
    let titleIN = $('#title').val();
    let annualSalaryIn = $('#annualSalary').val();

    $('#employeeTableBody').append(
        
        `<tr>
            <td> ${firstNameIn} </td>
            <td> ${lastNameIn} </td> 
            <td> ${idIn} </td>
            <td> ${titleIN} </td>
            <td>$${Number(annualSalaryIn).toFixed(2)} </td>
            <td><button class="deleteButton">Delete</button></td>
            </tr>`
        )

//adding new employee to the array
const newEmployee = new Employee(firstNameIn, lastNameIn, idIn, titleIN, annualSalaryIn);

employeeObjects.push(newEmployee);


    addingTotals();
    console.log('employees:', employeeObjects);
    
}


let totalMonthly = 0;
let totalYearly  = 0;
        // update totalMonthly
function addingTotals() {

    for (let i = 0; i < employeeObjects.length; i++) {
    console.log('updating totalMonthly');
    totalMonthly = totalMonthly +   
    (employeeObjects[i].annualSalary / 12);


   console.log(totalMonthly);
    
   totalYearly = totalYearly +
   (employeeObjects[i].annualSalary);
    
   console.log('total yearly:', totalYearly);
    
   }

$('#totalMonthlyDiv').text(totalMonthly.toFixed(2));   
    
}



//delete button function
function deleteFunct(){
    console.log('deleting');
   // determining which row was clicked 
    let row = $(this).closest("tr").index();

    console.log('row clicked:', row);

  //removing employee from the array

    employeeObjects.splice(row - 1, 1);
  
    console.log(employeeObjects);
    
  
    //removing row from table

   $(this).parent().parent().remove();
   
    //totalling new monthly

    totalMonthly = 0

    addingTotals()

    // if array is empty, total monthly = 0

    if (employeeObjects === []) {
        totalMonthly = 0
    }

}

//clearing input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#title').val('');
    $('#annualSalary').val('');
