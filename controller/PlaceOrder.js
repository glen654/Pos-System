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
    setDate();

    function generateOrderId() {
        const orderId = 'P' + currentOrderId.toString().padStart(3,'0');
        $("#order-input").val(orderId);
        currentOrderId++;
    }

    function setDate(){
        var now = new Date();

        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

        $('#date-input').val(today);
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
            const option = $('<option>', {
                value: customer.cusId,
                text: customer.cusId
            });
            $customerDropdown.append(option);
        });

    }

    $("#customer-dropdown").on('focus',()=>{
        loadCustomerIds();
    });

    $("#customer-dropdown").on('change', function() {
        const selectedCustomerId = $(this).val();
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

    function loadItemIds(){
        const $itemDropdown = $('#item-dropdown');

        $itemDropdown.empty();

        const defaultOption = $('<option>',{
            text: 'Select Item ID',
            value: ''
        });

        $itemDropdown.append(defaultOption);

        items.forEach(item => {
            const option = $('<option>',{
                value: item.itemCode,
                text: item.itemCode
            });
            $itemDropdown.append(option);
        });
    }

    $("#item-dropdown").on('focus',()=>{
        loadItemIds();
    });

    $("#item-dropdown").on('change', function() {
        const selectedItemId = $(this).val();
        const selectedItem = items.find(item => item.itemCode === selectedItemId);

        if (selectedItem) {
            $("#item-name-input").val(selectedItem.itemName);
            $("#price-input").val(selectedItem.itemPrice);
            $("#qty-input").val(selectedItem.itemQty);
        } else {
            $("#item-name-input").val('');
            $("#price-input").val('');
            $("#qty-input").val('');
        }
    });

    function total(){
        const price = +$("#price-input").val();
        let qty = +$("#order-qty-input").val();

        let total = price * qty;

        $("#total-label").text(total);
        $("#sub-total-label").text(total);
    }

    $('#btn-order-add').on('click',() =>{
        total();
    });

    function calculate(){
        const cash = +$('#cash-input').val();
        const discount = +$('#discount-input').val();
        const total = +$('#total-label').text();


        let balance;

        if(cash > total){
            balance = cash - total + (total * discount / 100);
            $('#balance-input').val(balance);
        }else {
            balance = total - (total * discount / 100);
            $('#balance-input').val(balance);
        }
    }

    function loadOrderTable(){
        $('#place-order-table').empty();

        orders.map((item,index) => {
            var record = `<tr>
                <td class="order-id-value">${item.orderId}</td>
                <td class="item-code-value">${item.itemCode}</td>
                <td class="customer-id-value">${item.customerId}</td>
                <td class="date-value">${item.date}</td>
                <td class="qty-value">${item.qty}</td>
                <td class="price-value">${item.unitPrice}</td>
                <td class="total-value">${item.total}</td>
            <tr>`
            $("#place-order-table").append(record);
        });
    }

    $('#btn-purchase').on('click',() => {
        calculate();

        var orderId = $('#order-input').val();
        var itemCode = $('#item-dropdown option:selected').val();
        var customerId = $('#customer-dropdown option:selected').val();
        var date = $('#date-input').val();
        var qty = $('#order-qty-input').val();
        var price = $('#price-input').val();
        var total = $('#total-label').text();


        let order = new PlaceOrder(orderId,itemCode,customerId,date,qty,price,total);

        orders.push(order);
        loadOrderTable();
        reset();

    });

    function reset(){
         $('#order-input').val('');
         $('#name-input').val('');
         $('#address-input').val('');
         $('#item-name-input').val('');
         $('#item-id-input').val('');
         $('#item-dropdown').prop('selectedIndex',0);
         $('#customer-dropdown').prop('selectedIndex',0);
         $('#date-input').val('');
         $('#qty-input').val('');
         $('#order-qty-input').val('');
         $('#price-input').val('');
         $('#total-label').text('');
    }

});

