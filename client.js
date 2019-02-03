console.log('in js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery');
    $('#submitButton').on('click', addInput);
    $('.tableBody').on('click', '.deleteButton', deleteEmployee);

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

    totalCost += Number(inputAnnualSalary);//add inputSalary value to itself as a number, store it in totalCost
    console.log(inputAnnualSalary);

    let monthlyCost= totalCost/12;//monthly cost
    $('#totalMonthlyCostOut').text(`Total Monthly: ${monthlyCost}`);
    if (monthlyCost > 20000){
        $('#totalMonthlyCostOut').css('background-color', 'red');
    }//end if statement

    $('.tableBody').append(`
    <tr class=employeeInfos>
        <td id= first>${inputFirstName} </td>
        <td id= last>${inputLastName} </td>
        <td id= inputId>${inputId} </td>
        <td id= title>${inputTitle} </td>
        <td id= salary>${inputAnnualSalary} </td>
        <td> <button class="deleteButton">Delete</button></td>
    </tr>
    `)
    $('.inputs').val('');
}//end addInput funtion



function deleteEmployee() {
    console.log('delete Employee');
    $(this).closest('tr').remove();//remove row of employee, closest tr

}//end deleteEmployee



