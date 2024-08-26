const saveBtn = $('#customer-btn-save');
const updateBtn = $('#customer-btn-update');
const deleteBtn = $('#customer-btn-delete');

var recordIndex;

$(document).ready(function() {
    loadCustomers();
});

function loadCustomers(){
    $.ajax({ 
        url: 'http://localhost:8081/posApi/customer',
        type: 'GET',           
        contentType: 'application/json', 
        success: function(customers) {
            console.log("Customers loaded:", customers);
            $("#customer-table").empty();
            
            customers.forEach(function(item) {
                var record = `
                    <tr>
                        <td class="customer-id-value">${item.customerId}</td>
                        <td class="customer-name-value">${item.customerName}</td>
                        <td class="customer-address-value">${item.customerAddress}</td>
                        <td class="customer-tel-value">${item.customerTel}</td>
                    </tr>`;
                $("#customer-table").append(record);
            });
        },
        error: function(xhr, status, error) {
            console.error("Failed to load customers:", error);
            alert("An error occurred while loading the customer data.");
        }
    })
}


function customerSave(){
    if (!validateCustomer()) {
         return;
    }
            
     var cusId = $("#cus_id").val();
     var cusName = $("#cus_name").val();
     var cusAddress = $("#cus_address").val();
     var cusTel = $("#cus_tel").val();

     $.ajax({
        url:"http://localhost:8081/posApi/customer",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            "customerId":cusId,
            "customerName":cusName,
            "customerAddress":cusAddress,
            "customerTel":cusTel
        }),
        success:function(result){
            console.log(result);
            alert("Customer Saved Successfully");
            reset();
            loadCustomers();
        },
        error:function(result){
            alert("Customer Save Unsuccessful");
            console.log(result);
        }
        
     })
}

function customerUpdate(){
    if (!validateCustomer()) {
        return;
   }
           
    var cusId = $("#cus_id").val();
    var cusName = $("#cus_name").val();
    var cusAddress = $("#cus_address").val();
    var cusTel = $("#cus_tel").val();

    $.ajax({
        url:"http://localhost:8081/posApi/customer/" + cusId,
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            "customerName":cusName,
            "customerAddress":cusAddress,
            "customerTel":cusTel
        }),
        success:function (results) {
            console.log(results);
            alert("Customer Update Successfull");
            reset();
            loadCustomers();
        },
        error:function (error) {
            console.log("Status:", status);
            console.log("Error:", error);
            console.log("Response Text:", xhr.responseText);
            alert("Customer update unsuccessful");
        }
    })
}

function customerDelete(){
    var cusId = $("#cus_id").val();

    $.ajax({
        url:"http://localhost:8081/posApi/customer/" + cusId,
        method:"DELETE",
        contentType:"application/json",
        success:function (results) {
            console.log(results);
            alert("Success");
            loadCustomers();
        },
        error:function (error) {
            console.log("Status:", status);
            console.log("Error:", error);
            console.log("Response Text:", xhr.responseText);
            alert("Customer Delete unsuccessful");
        }
    })
}

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

saveBtn.on('click',function(){
    event.preventDefault();
    customerSave();
});

updateBtn.on('click',function(){
    event.preventDefault();
    customerUpdate();
})

deleteBtn.on('click',function(){
    customerDelete();
})













