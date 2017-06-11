import{Component, OnInit} from '@angular/core';
import {Book} from './book';
import { BookService} from './book.service';

@Component({
  selector:'store',
  templateUrl:'./store.component.html',
  styleUrls:['./store.component.css']
})
export class StoreComponent implements OnInit{
  books:Book[];
  constructor(
    private bookService:BookService
  ){

  }
  ngOnInit():void{
      this.bookService.getBooks()
        .then(books =>this.books);
  }
}
