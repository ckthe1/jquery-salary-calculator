console.log('in js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery');
    $('#deleteButton').on('click', deleteEmployee);
    $('#submitButton').on('click', addInput);
    


}//end onReady
let totalCost = 0; 
let totalSalary = 0;
function addInput(){
    console.log('input values');
    let inputFirstName = $('#inputFirstName').val();
    console.log(inputFirstName);
    let inputLastName = $('#inputLastName').val();
    console.log(inputLastName);
    let inputId = $('#inputId').val();
    console.log(inputId);
    let inputTitle = $('#inputTitle').val();
    console.log(inputTitle);
    let inputAnnualSalary = $('#inputSalary').val();

    totalCost += Number($('#inputSalary').val());//add inputSalary value to itself as a number, store it in totalCost
    console.log(inputAnnualSalary);

    let monthlyCost= totalCost/12;//monthly cost
    $('#totalMonthlyCostOut').text(`Total Monthly: ${monthlyCost}`);
    if (monthlyCost > 20000){
        $('#totalMonthlyCostOut').css("background-color", "red");

    }//end if 

    $('#employeesBody').append(`
    <tr class=employeeInfos>
                <td id= first>${inputFirstName}</td>
                <td id= last>${inputLastName}</td>
                <td id=inputId >${inputId}</td>
                <td id= title>${inputTitle}</td>
                <td id= salary>${inputAnnualSalary}</td>
            </tr>
    `)
    $('.inputs').val('');
}//end addInput

function deleteEmployee() {
    console.log('delete Employee');
    $('td').remove();//remove row of employee

}//end deleteEmployee



// function addSalary(){
//     totalSalary = Number($('#inputSalary').val())+ Number ($(this).val());
//     console.log(totalSalary);
    
//     //inputAnnualSalary + 
//     //let input80 = $('#input80').val();
//     //console.log(input80);
// }