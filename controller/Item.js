import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js"

var recordIndex;

function loadTableItem(){
    $("#table-item").empty();

    items.map((item,index) => {
        var record = `<tr>
            <td class="item-code-value">${item.itemCode}</td>
            <td class="item-name-value">${item.itemName}</td>
            <td class="item-qty-value">${item.itemQty}</td>
            <td class="item-price-value">${item.itemPrice}</td>
        <tr>`
        $("#table-item").append(record);
    });
}
$("#item-btn-save").on('click',() => {
    if(!validateItem()){
        return;
    }
    
    var itemCode = $("#item_code").val();
    var itemName = $("#item_name").val();
    var itemQty = $("#item_qty").val();
    var itemPrice = $("#item_price").val();

    let isDuplicate = items.some(item => item.itemCode === itemCode);

    if(isDuplicate){
        alert("Item Code Already Exists. Try a Different Item Code");
        return;
    }

    let item = new ItemModel(itemCode,itemName,itemQty,itemPrice);

    items.push(item);
    loadTableItem();
    updateItemCount();
    
    reset();
});

$("#item-btn-update").on('click',() =>{
    var itemCode = $("#item_code").val();
    var itemName = $("#item_name").val();
    var itemQty = $("#item_qty").val();
    var itemPrice = $("#item_price").val();


    items[recordIndex] = new ItemModel(itemCode,itemName,itemQty,itemPrice);


    loadTableItem(items);
    reset();

});

$("#item-btn-delete").on('click',() =>{
    items.splice(recordIndex,1);
    loadTableItem();
    reset();

});

$("#table-item").on('click','tr',function (){
    let index = $(this).index();
    recordIndex = index;

    let itemCode = $(this).find(".item-code-value").text();
    let itemName = $(this).find(".item-name-value").text();
    let itemQty = $(this).find(".item-qty-value").text();
    let itemPrice = $(this).find(".item-price-value").text();


    $("#item_code").val(itemCode);
    $("#item_name").val(itemName);
    $("#item_qty").val(itemQty);
    $("#item_price").val(itemPrice);

});

function reset(){
    $("#item_code").val('');
    $("#item_name").val('');
    $("#item_qty").val('');
    $("#item_price").val('');
}

function updateItemCount(){
    const itemCount = items.length;

    $('.item-count').text(itemCount);
}

function validateItem(){
    const itemCode = $("#item_code").val();

    const isItemCodeValidated = /[I][0-9]{3,}/;

    if (!isItemCodeValidated.test(itemCode)) {
        alert('Invalid Item Code format. It should be in the format I000 where XXXX are digits.');
        return false;
    }

    const itemName = $("#item_name").val();

    const isItemNameValidated = /[A-Z][a-zA-Z\s]+/;

    if (!isItemNameValidated.test(itemName)) {
        alert('Invalid Item Name format. It should start with a capital letter.');
        return false;
    }

    const itemQty = $("#item_qty").val();

    const isItemQtyValidated = /^[1-9]\d*$/;

    if (!isItemQtyValidated.test(itemQty)) {
        alert('Invalid Item Qty. It should be a positive quantity.');
        return false;
    }

    const itemPrice = $("#item_price").val();

    const isItemPriceValidated = /^\d+(\.\d{1,2})?$/;

    if (!isItemPriceValidated.test(itemPrice)) {
        alert('Invalid Item Price. It should be a positive Price.');
        return false;
    }

    return true;
}