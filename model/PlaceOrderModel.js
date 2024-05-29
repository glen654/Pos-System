export default class PlaceOrder{
    constructor(orderId,itemCode,customerId,date,qty,unitPrice,total) {
        this._orderId = orderId;
        this._itemCode = itemCode;
        this._customerId = customerId;
        this._date = date;
        this._qty = qty;
        this._unitPrice = unitPrice;
        this._total = total;
    }

    get orderId(){
        return this._orderId;
    }

    get itemCode(){
        return this._itemCode;
    }

    get customerId(){
        return this._customerId;
    }

    get date(){
        return this._date;
    }

    get qty(){generateOrderId();
loadCustomerIds();
        return this._qty;
    }

    get unitPrice(){
        return this._unitPrice;
    }

    get total(){
        return this._total;
    }

    set orderId(orderId){
        this._orderId = orderId;
    }

    set itemCode(itemCode){
        this._itemCode = itemCode;
    }

    set customerId(customerId){
        this._customerId = customerId;
    }

    set date(date){
        this._date = date;
    }

    set qty(qty){
        this._qty = qty;
    }

    set unitPrice(unitPrice){
        this._unitPrice = unitPrice;
    }

    set total(total){
        this._total = total;
    }
}