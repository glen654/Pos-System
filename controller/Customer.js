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
    if (!validateCustomer()) {
        return;
    }
    
    var cusId = $("#cus_id").val();
    var cusName = $("#cus_name").val();
    var cusAddress = $("#cus_address").val();
    var cusTel = $("#cus_tel").val();

    let isDuplicate = customers.some(customer => customer.cusId === cusId);

    if(isDuplicate){
        alert('Customer ID Already Exists. Please Try another one');
        return;
    }
    
    let customer = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    customers.push(customer);
    loadTableCustomer();
    updateCustomerCount();
    
    reset();
    
});

$("#customer-btn-update").on('click',() =>{
    var cusId = $("#cus_id").val();
    var cusName = $("#cus_name").val();
    var cusAddress = $("#cus_address").val();
    var cusTel = $("#cus_tel").val();

    console.log(cusId);
    console.log(cusName);
    console.log(cusAddress);
    console.log(cusTel);


    customers[recordIndex] = new CustomerModel(cusId,cusName,cusAddress,cusTel);
    
    loadTableCustomer(customers);
    reset();
  
});

$("#customer-btn-delete").on('click',() =>{
    customers.splice(recordIndex,1);
    loadTableCustomer();
    reset();
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

function reset(){
    $('#cus_id').val('');
    $('#cus_name').val('');
    $('#cus_address').val('');
    $('#cus_tel').val('');
}

function updateCustomerCount(){
    const customerCount = customers.length;

    $('.customer-count').text(customerCount);
}


function validateCustomer(){
    const cusId =  $("#cus_id").val();

    const isCusIdValidated = /[C][0-9]{3,}/;

    if (!isCusIdValidated.test(cusId)) {
        alert('Invalid Customer ID format. It should be in the format C000 where XXXX are digits.');
        return false;
    }

    const cusName = $("#cus_name").val();

    const isCusNameValidated = /[A-Z][a-zA-Z\s]+/;

    if(!isCusNameValidated.test(cusName)){
        alert('Invalid Customer Name format. It should be start with a capital letter.');
        return false;
    }

    const cusAddress =  $("#cus_address").val();

    const isCusAddressValidated = /[A-Z][a-zA-Z\s]+/;

    if(!isCusAddressValidated.test(cusAddress)){
        alert('Invalid Customer Address format. It should be start with a capital letter.');
        return false;
    }

    const cusTel = $("#cus_tel").val();

    const isCusTelValidated = /^0\d{9}$/;


    if(!isCusTelValidated.test(cusTel)){
        alert('Invalid Customer Telephone format.');
        return false;
    }

    return true;
    
}