import{Component, OnInit, Input} from '@angular/core';
import {Book} from "./book";
import {BookService} from "./book.service";

@Component({
  selector:'book-management',
  templateUrl:'./book.management.component.html',
  styleUrls:['./book.management.component.css']
})
export class BookManagementComponent implements OnInit{
  books:Book[];
  @Input() book:Book;
  constructor(
    private bookService:BookService,
  ){

  }
  ngOnInit():void{
    this.bookService.getBooks()
      .then(books=>this.books=books);
  }
  deleteBook(bookId:number){
    this.bookService.deleteBook(bookId);
    this.ngOnInit();
  }
  updateAdmin(id:number,book:Book){
    this.bookService.updateBook(id,book)
  }
  createBook(price:number,quantity:number,status:string){
      let book:Book=new Book(price,quantity)
      this.bookService.createBook(book);
      this.ngOnInit();
  }
}
