export default class ItemModel{
    constructor(itemCode,itemName,itemQty,itemPrice) {
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._itemQty = itemQty;
        this._itemPrice = itemPrice;
    }
    
    get itemCode(){
        return this._itemCode
    }

    get itemName(){
        return this._itemName
    }

    get itemQty(){
        return this._itemQty
    }

    get itemPrice(){
        return this._itemPrice
    }
    
    set itemCode(itemCode){
        return this._itemCode = itemCode;
    }

    set itemName(itemName){
        return this._itemName = itemName;
    }

    set itemQty(itemQty){
        return this._itemQty = itemQty;
    }

    set itemPrice(itemPrice){
        return this._itemPrice = itemPrice;
    }
}