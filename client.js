console.log('in js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery');

    $("#submitButton").on("click",addInput);


}//end onReady
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
    console.log(inputAnnualSalary);
    
    $("#employeesBody").append(`
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