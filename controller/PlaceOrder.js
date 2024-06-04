import PlaceOrder from "../model/PlaceOrderModel.js";
import CustomerModel from "../model/CustomerModel.js";
import {orders,customers,items} from "../db/db.js";

console.log('Customers array after import:', customers);

let currentOrderId = 1;

/*$(document).ready(()=>{
    generateOrderId();
    loadCustomerIds();


    function generateOrderId(){
        const orderId = 'P' + currentOrderId.toString().padStart(3,'0');
        $("#order-input").val(orderId);
        currentOrderId++;
    }


    function loadCustomerIds() {
        /!*console.log("loading customer IDs");
        console.log('Customers: ', customers);

        $("#customer-dropdown").empty();

        customers.forEach(customer => {
            console.log(`Adding Customer IDs: ${customer.cusId}`);
            $("#customer-dropdown").append(new Option(customer.cusId,customer.cusId));
        });*!/
        /!*$('#customer-dropdown').empty();
        const defaultOption = document.createElement("option");

        defaultOption.text = "Select Customer ID";
        $('#customer-dropdown').append(defaultOption);

        customers.forEach(customer => {
            const option = document.createElement("option");
            option.value = JSON.stringify(customer);
            option.text = customer.cusId;
            $('#customer-dropdown').append(option);
        });

    }

    $("#customer-dropdown").on('focus',()=>{
        loadCustomerIds();
    });*!/

        const $customerDropdown = $("#customer-dropdown");

        $customerDropdown.empty();

        const defaultOption = $('<option>', {
            text: 'Select Customer ID',
            value: ''
        });

        $customerDropdown.append(defaultOption);

        customers.forEach(customer => {
            const option = $('<option>', {
                value: customer.cusId,
                text: customer.cusId
            });
            $customerDropdown.append(option);
        });


        $("#customer-dropdown").on('change', function () {
            const selectedCustomerId = $(this).val();
            const selectedCustomer = customers.find(customer => customer.cusId === selectedCustomerId);

            if (selectedCustomer) {
                $("#name-input").val(selectedCustomer.cusName);
                $("#address-input").val(selectedCustomer.cusAddress);
            } else {
                $("#name-input").val('');
                $("#address-input").val('');
            }
        });
    }

});*/


$(document).ready(() => {
    generateOrderId();
    loadCustomerIds();

    function generateOrderId() {
        const orderId = 'P' + currentOrderId.toString().padStart(3,'0');
        $("#order-input").val(orderId);
        currentOrderId++;
    }

    function loadCustomerIds() {
        console.log('Loading customer IDs...');
        console.log('Customers:', customers);

        const $customerDropdown = $('#customer-dropdown');

        $customerDropdown.empty();

        const defaultOption = $('<option>', {
            text: 'Select Customer ID',
            value: ''
        });

        $customerDropdown.append(defaultOption);


        customers.forEach(customer => {
            console.log('Appending customer:', customer);
            const option = $('<option>', {
                value: customer.cusId,
                text: customer.cusId
            });
            $customerDropdown.append(option);
        });


        console.log('Dropdown options after appending:', $customerDropdown.html());
    }

    $("#customer-dropdown").on('change', function() {
        const selectedCustomerId = $(this).val();
        console.log(`Selected Customer ID: ${selectedCustomerId}`);
        const selectedCustomer = customers.find(customer => customer.cusId === selectedCustomerId);

        if (selectedCustomer) {
            console.log(`Found Customer: ${selectedCustomer.cusName}, ${selectedCustomer.cusAddress}`);
            $("#name-input").val(selectedCustomer.cusName);
            $("#address-input").val(selectedCustomer.cusAddress);
        } else {
            console.log('No customer found');
            $("#name-input").val('');
            $("#address-input").val('');
        }
    });
});

