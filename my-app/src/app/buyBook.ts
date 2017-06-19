import {User} from "./user";
import {Book} from "./book";
export class BuyBook{
  id:number;
  client:User;
  book:Book;
  quantity:number;
  delivery:String;
}
