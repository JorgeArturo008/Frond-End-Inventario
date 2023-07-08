export class InventoryModel {

        codigoP : Number;
        Descripcion : string;
        Precio: Number;
        Stock: Number

    constructor(codigop : Number, Descripcion : string, Precio: Number, Stock:Number){

        this.codigoP = codigop;
        this.Descripcion = Descripcion;
        this.Precio = Precio;
        this.Stock = Stock;

    }
}