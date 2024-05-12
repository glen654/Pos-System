import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js";


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
$("#btn-save").on('click',() =>{
    var cusId = $("#customer-id").val();
    var cusName = $("#customer-name").val();
    var cusAddress = $("#inputAddress1").val();
    var cusTel = $("#inputTel1").val();
    
    let customer = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    customers.push(customer);
    loadTableCustomer();
});