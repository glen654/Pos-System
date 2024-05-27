import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js"


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

    let item = new ItemModel(itemCode,itemName,itemQty,itemPrice);

    items.push(item);
    loadTableItem();
    $("#item-btn-reset").click();
});