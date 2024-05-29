import PlaceOrderModel from "../model/PlaceOrderModel.js";
import CustomerModel from "../model/CustomerModel.js";
import {orders,customers,items} from "../db/db.js";


$(document).ready(()=>{
    generateOrderId();
    loadCustomerIds();


    function generateOrderId(){
        const orderId = 'OR' + Date.now();
        $("#order-label").val(orderId);
    }


    function loadCustomerIds(){
        customers.forEach(customer => {
            $("#inputState").append(new Option(customer.cusId, customer.cusId));
        });
    }

    $("#inputState").on('change',function (){
        const selectedCustomerId = $(this).val();
        const selectedCustomer = customers.find(customer => customer.cusId === selectedCustomerId);

        if(selectedCustomer){
            $("#name-input").val(selectedCustomer.cusName);
            $("#address-input").val(selectedCustomer.cusAddress);
        }else{
            $("#name-input").val('');
            $("#address-input").val('');
        }
    });
});




