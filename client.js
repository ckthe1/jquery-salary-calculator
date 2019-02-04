console.log('in js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery');
    $('#submitButton').on('click', addInput);// on click of the submit button run addInput
    $('.tableBody').on('click', '.deleteButton', deleteEmployee);//

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
    $('#totalMonthlyCostOut').text(`Total Monthly: ${monthlyCost}`);//replace totalMonthlyCostOut with Total Monthly: "monthly cost value"

    if (monthlyCost > 20000){
        $('#totalMonthlyCostOut').css('background-color', 'red');//use css to change back ground color to red in totalMonthlyCostOut
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
    `)// append this row to the tableBody

    $('.inputs').val('');//empty the values, class = inputs 
}//end addInput funtion

function deleteEmployee() {
    console.log('delete Employee');
    $(this).closest('tr').remove();//remove row of employee.
    // (this), the thing that was just clicked, target 'tr', remove it
}//end deleteEmployee



