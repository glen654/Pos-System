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
    var id = $("#customer-id").val();
    var name = $("#customer-name").val();
    var address = $("#inputAddress").val();
    var tel = $("#inputTel").val();
    
    let customer = new CustomerModel(id,name,address,tel);
    
    customers.push(customer);
    loadTableCustomer();
});