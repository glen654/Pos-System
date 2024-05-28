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

    reset();
});

$("#item-btn-update").on('click',() =>{
    var itemCode = $("#item_code").val();
    var itemName = $("#item_name").val();
    var itemQty = $("#item_qty").val();
    var itemPrice = $("#item_price").val();

    let itemObj = {...items[recordIndex]};

    itemObj.itemCode = itemCode;
    itemObj.itemName = itemName;
    itemObj.itemQty = itemQty;
    itemObj.itemPrice = itemPrice;

    loadTableItem();
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