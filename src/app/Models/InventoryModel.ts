export class InventoryModel {
        _id? : string;
        code: string;
        description : string;
        price: Number;
        stock: Number

    constructor( code: string, description : string, price: Number, stock:Number, _id? : string){

        this.code = code;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this._id = _id;

    }
}