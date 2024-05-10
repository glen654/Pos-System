export default class CustomerModel{
    constructor(cusId,cusName,cusAddress,cusTel) {
        this._cusId = cusId;
        this.-cusName = cusName;
        this._cusAddress = cusAddress;
        this._cusTel = cusTel;
    }
    
    get cusId(){
        return this._cusId;
    }

    get cusName(){
        return this._cusName;
    }

    get cusAddress(){
        return this._cusAddress;
    }

    get cusTel(){
        return this._cusTel;
    }

    set cusId(cusId){
        this._cusId = cusId;
    }

    set cusName(cusName){
        this._cusName = cusName;
    }

    set cusAddress(cusAddress){
        this._cusAddress = cusAddress;
    }

    set cusTel(cusTel){
        this._cusTel = cusTel;
    }
}