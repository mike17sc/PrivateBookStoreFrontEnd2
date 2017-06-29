import{Component, OnInit, Input} from '@angular/core';
import {Book} from './book';
import { BookService} from './book.service';
import {User} from "./user";
import {BuyBook} from "./buyBook";

@Component({
  selector:'store',
  templateUrl:'./store.component.html',
  styleUrls:['./store.component.css']
})
export class StoreComponent implements OnInit{
  books:Book[];
  buyCurrentBook:BuyBook=new BuyBook();
  @Input() currentUser:User;
  constructor(
    private bookService:BookService
  ){

  }
  ngOnInit():void{
      this.bookService.getBooks()
        .then(books =>this.books=books);
  }
  buyBook(delivery:String,book:Book,quantity:number){
    console.log(book);
    console.log(quantity);
    this.buyCurrentBook.quantity=quantity;
    this.buyCurrentBook.delivery=delivery;
    this.buyCurrentBook.client=this.currentUser;
    this.buyCurrentBook.book=book;
    this.bookService.buyBooks(this.buyCurrentBook).then(buybook=>this.buyCurrentBook=buybook);
    this.buyCurrentBook=new BuyBook();
    this.ngOnInit();
  }
}
