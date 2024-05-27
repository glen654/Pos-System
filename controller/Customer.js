import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js"

function loadTableCustomer(){
    $("#customer-table").empty();
    
    customers.map((item,index) =>{
        var record = `<tr>
            <td class="customer-id-value">${item.cusId}</td>
            <td class="customer-name-value">${item.cusName}</td>
            <td class="customer-address-value">${item.cusAddress}</td>
            <td class="customer-tel-value">${item.cusTel}</td>
        <tr>`
        $("#customer-table").append(record);
    });
}

$("#customer-btn-save").on('click',() =>{
    var cusId = $("#cus_id").val();
    var cusName = $("#cus_name").val();
    var cusAddress = $("#cus_address").val();
    var cusTel = $("#cus_tel").val();


    console.log(cusId);
    console.log(cusName);
    console.log(cusAddress);
    console.log(cusTel);
    
    let customer = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    customers.push(customer);
    loadTableCustomer();
});


