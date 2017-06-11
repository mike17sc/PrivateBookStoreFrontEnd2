import{Component, OnInit} from '@angular/core';
import {Book} from './book';
import { BookService} from './book.service';

@Component({
  selector:'store',
  templateUrl:'./store.component.html',
  styleUrls:['./store.component.css']
})
export class StoreComponent implements OnInit{
  books:Promise<Book[]>;
  constructor(
    private bookService:BookService
  ){

  }
  ngOnInit():void{
      this.books=this.bookService.getBooks();
  }
}
