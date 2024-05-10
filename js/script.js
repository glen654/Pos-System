$("#login").css({display:'block'});
$("#dashboard-section").css({display: 'none'});
$("#customer-section").css({display: 'none'});
$("#item-section").css({display: 'none'});
$("#place-order-section").css({display: 'none'});

$("#btn-signIn").on('click',() =>{
    $("#login").css({display:'none'});
    $("#dashboard-section").css({display: 'block'});
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