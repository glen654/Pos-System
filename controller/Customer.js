import CustomerModel from "../model/CustomerModel.js";
/*import {customers} from "../db/db.js"*/

var customers = [];
function loadTableCustomer(){
    $("#customer-table").empty();
    
    customers.map((item,index) =>{
        var record = `<tr>
            <td class="customer-id-value">${item.id}</td>
            <td class="customer-name-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-tel-value">${item.tel}</td>
        <tr>`
        $("#customer-table").append(record);
    });
}

$("#btn-customer-save").on('click',() =>{
    console.log("button is clicked");
    var cusId = $("#customer-id").val();
    var cusName = $("#customer-name").val();
    var cusAddress = $("#customer-address").val();
    var cusTel = $("#customer-tel").val();


    console.log(cusId);
    console.log(cusName);
    console.log(cusAddress);
    console.log(cusTel);
    let customer = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    customers.push(customer);
    loadTableCustomer();
});


