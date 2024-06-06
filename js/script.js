import {credentials,customers,items,orders} from "../db/db.js";

$("#login").css({display:'block'});
$("#dashboard-section").css({display: 'none'});
$("#customer-section").css({display: 'none'});
$("#item-section").css({display: 'none'});
$("#place-order-section").css({display: 'none'});

$("#btn-signIn").on('click',() =>{
    var username = $("#login-username").val();
    var password = $("#login-password").val();
    for(let i = 0; i <=credentials.length; i++){
        if(credentials[0] === username && credentials[1] === password){
            $("#login").css({display:'none'});
            $("#dashboard-section").css({display: 'block'});
        }else{
           window.alert("Username or Password in Incorrect");
        }
    }
});

$(".btn-dashboard").on('click',() =>{
    $("#dashboard-section").css({display: 'block'});
    $("#customer-section").css({display: 'none'});
    $("#item-section").css({display: 'none'});
    $("#place-order-section").css({display: 'none'});
});

$(".btn-customer").on('click',() =>{
    $("#dashboard-section").css({display: 'none'});
    $("#customer-section").css({display: 'block'});
    $("#item-section").css({display: 'none'});
    $("#place-order-section").css({display: 'none'});
});

$(".btn-item").on('click',() =>{
    $("#dashboard-section").css({display: 'none'});
    $("#item-section").css({display: 'block'});
    $("#customer-section").css({display: 'none'});
    $("#place-order-section").css({display: 'none'});
});

$(".btn-place-order").on('click',() =>{
    $("#dashboard-section").css({display: 'none'});
    $("#place-order-section").css({display: 'block'});
    $("#item-section").css({display: 'none'});
    $("#customer-section").css({display: 'none'});
});

$(".btn-signOut").on('click',() =>{
    $("#dashboard-section").css({display: 'none'});
    $("#login").css({display: 'block'});
    $("#customer-section").css({display: 'none'});
    $("#item-section").css({display: 'none'});
    $("#place-order-section").css({display: 'none'});
});


(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


function updateCount(){
    /*const customerCount = customers.length;
    const itemCount = items.length;
    const orderCount = orders.length;

    $('.customer-count').text(customerCount);
    $('.item-count').text(itemCount);
    $('.order-count').text(orderCount);

    console.log('Customer count:', $('.customer-count').text());
    console.log('Item count:', $('.item-count').text());
    console.log('Order count:', $('.order-count').text());*/
    let customerCount = 0;
    let itemCount = 0;
    let orderCount = 0;

    for(let i = 0; i < customers.length; i++){
        customerCount++;
    }

    for(let i = 0; i < items.length; i++){
        itemCount++;
    }

    for(let i = 0; i < orders.length; i++){
        orderCount++;
    }

    $('.customer-count').text(customerCount);
    $('.items-count').text(itemCount);
    $('.order-count').text(orderCount);

    console.log('Customer count:', customerCount);
    console.log('Item count:', itemCount);
    console.log('Order count:', orderCount);
}

$(document).ready(() => {
    updateCount();
});