import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js"

var recordIndex;

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
    
    let customer = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    customers.push(customer);
    loadTableCustomer();

    $("#customer-btn-reset").click();
    
});

$("#customer-btn-update").on('click',() =>{
    var cusId = $("#cus_id").val();
    var cusName = $("#cus_name").val();
    var cusAddress = $("#cus_address").val();
    var cusTel = $("#cus_tel").val();
    
    let cusObject = {...customers[recordIndex]};
    
    cusObject.cusId = cusId;
    cusObject.cusName = cusName;
    cusObject.cusAddress = cusAddress;
    cusObject.cusTel = cusTel;
    
    loadTableCustomer();
    $("#customer-btn-reset").click();
});

$("#customer-btn-delete").on('click',() =>{
    customers.splice(recordIndex,1);
    loadTableCustomer();
    $("#customer-btn-reset").click();
});

$("#customer-table").on('click','tr',function (){
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let tel = $(this).find(".customer-tel-value").text();

    $("#cus_id").val(id);
    $("#cus_name").val(name);
    $("#cus_address").val(address);
    $("#cus_tel").val(tel);
    
});