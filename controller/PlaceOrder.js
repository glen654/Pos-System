import PlaceOrder from "../model/PlaceOrderModel.js";
import CustomerModel from "../model/CustomerModel.js";
import {orders,customers,items} from "../db/db.js";

let currentOrderId = 1;

$(document).ready(()=>{
    generateOrderId();
    loadCustomerIds();


    function generateOrderId(){
        const orderId = 'P' + currentOrderId.toString().padStart(3,'0');
        $("#order-input").val(orderId);
        currentOrderId++;
    }


    function loadCustomerIds(){
        console.log("loading customer IDs");
        console.log('Customers: ', customers);

        $("#customer-dropdown").empty();

        customers.forEach(customer => {
            console.log(`Adding Customer IDs: ${customer.cusId}`);
            $("#customer-dropdown").append(new Option(customer.cusId,customer.cusId));
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




