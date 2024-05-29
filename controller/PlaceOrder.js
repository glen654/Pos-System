import PlaceOrderModel from "../model/PlaceOrderModel.js";
import {orders,customers,items} from "../db/db.js";


function generateOrderId(){
    const orderId = 'OR' + Date.now();
    $("#order-label").val(orderId);
}


function loadCustomerIds(){
    customers.forEach(customer => {
        $("#inputState").append(new Option(customer.cusId, customer.cusId));
    });
}


generateOrderId();
loadCustomerIds();