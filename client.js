console.log('in js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery');

    $('#submitButton').on('click', addInput);
    //$('#submitButton').on('click', addSalary);


}//end onReady
let salaryCounter = 0;
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
    salaryCounter += Number($('#inputSalary').val());
    console.log(inputAnnualSalary);
    $('#TotalMonthlyCostOut').text(`Total Monthly: ${salaryCounter/12}`);
    $('#employeesBody').append(`
    <tr class=employeeInfos>
                <td>${inputFirstName}</td>
                <td>${inputLastName}</td>
                <td>${inputId}</td>
                <td>${inputTitle}</td>
                <td>${inputAnnualSalary}</td>
            </tr>
    `)
    $('.inputs').val('');
}
// function addSalary(){
//     totalSalary = Number($('#inputSalary').val())+ Number ($(this).val());
//     console.log(totalSalary);
    
//     //inputAnnualSalary + 
//     //let input80 = $('#input80').val();
//     //console.log(input80);
// }