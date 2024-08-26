const saveBtn = $('#item-btn-save');
const updateBtn = $('#item-btn-update');
const deleteBtn = $('#item-btn-delete');

var recordIndex;

$(document).ready(function() {
    loadItem();
});

function loadItem(){
    $.ajax({ 
        url: 'http://localhost:8081/posApi/item',
        type: 'GET',           
        contentType: 'application/json', 
        success: function(items) {
            console.log("Items loaded:", items);
            $("#table-item").empty();
            
            items.forEach(function(item) {
                var record = `
                    <tr>
                       <td class="item-code-value">${item.itemCode}</td>
                       <td class="item-name-value">${item.itemName}</td>
                       <td class="item-qty-value">${item.qtyOnHand}</td>
                       <td class="item-price-value">${item.unitPrice}</td> 
                    </tr>`;
                $("#table-item").append(record);
            });
        },
        error: function(xhr, status, error) {
            console.error("Failed to load Items:", error);
            alert("An error occurred while loading the item data.");
        }
    })
}
function itemSave(){
    if (!validateItem()) {
        return;
   }
           
   var itemCode = $("#item_code").val();
   var itemName = $("#item_name").val();
   var itemQty = $("#item_qty").val();
   var itemPrice = $("#item_price").val();

    $.ajax({
       url:"http://localhost:8081/posApi/item",
       method:"POST",
       contentType:"application/json",
       "data":JSON.stringify({
           "itemCode":itemCode,
           "itemName":itemName,
           "qtyOnHand":itemQty,
           "unitPrice":itemPrice
       }),
       success:function(result){
           console.log(result);
           alert("Item Saved Successfully");
           reset();
           loadItem();
       },
       error:function(result){
           alert("Item Save Unsuccessful");
           console.log(result);
       }
       
    })
}

function itemUpdate(){
    if (!validateItem()) {
        return;
   }
   
   var itemCode = $("#item_code").val();
   var itemName = $("#item_name").val();
   var itemQty = $("#item_qty").val();
   var itemPrice = $("#item_price").val();


    $.ajax({
        url:"http://localhost:8081/posApi/item/" + itemCode,
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            "itemName":itemName,
            "qtyOnHand":itemQty,
            "unitPrice":itemPrice
        }),
        success:function (results) {
            console.log(results);
            alert("Item Update Successfull");
            reset();
            loadItem();
        },
        error:function (error) {
            console.log(error);
            alert("Item Update Unsuccessful");
        }
    })
}

function itemDelete(){
    var itemCode = $("#item_code").val();

    $.ajax({
        url:"http://localhost:8081/posApi/item/" + itemCode,
        method:"DELETE",
        contentType:"application/json",
        success:function (results) {
            console.log(results);
            alert("Item Deleted Suncessfully");
            loadItem();
        },
        error:function (error) {
            console.log(error);
            alert("Delete Item Unsuccessful");
        }
    })
}

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

saveBtn.on('click',function(){
    event.preventDefault();
    itemSave();
});

updateBtn.on('click',function(){
    event.preventDefault();
    itemUpdate();
});

deleteBtn.on('click',function(){
    itemDelete();
});








