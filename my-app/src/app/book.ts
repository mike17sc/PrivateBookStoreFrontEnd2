export class Book{
  id:number;
  price:number;
  quantity:number;
  status:boolean;
  constructor(price:number,quantity:number){
    this.price=price;
    this.quantity=quantity;
  }
}
