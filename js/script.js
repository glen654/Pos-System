$("#login").css({display:'block'});
$("#dashboard-section").css({display: 'none'});
$("#customer-section").css({display: 'none'});
$("#item-section").css({display: 'none'});
$("#place-order-section").css({display: 'none'});

$("#btn-signIn").on('click',() =>{
    $("#login").css({display:'none'});
    $("#dashboard-section").css({display: 'block'});
});