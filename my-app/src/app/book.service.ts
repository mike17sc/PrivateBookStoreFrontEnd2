import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{Book} from'./book';
import {BuyBook} from "./buyBook"


@Injectable()
export class BookService {
  constructor(private http: Http) {
  }
  getBooks():Promise<Array<Book>>{
    return this.http
      .get("/api/book")
      .toPromise()
      .then((response =>{
        console.log(response.json());
        return response.json() as Book[];
      })
      )
      .catch(this.handleError);
  }
  buyBooks(buyBook:BuyBook):Promise<BuyBook>{
    const headers=new Headers();
    headers.append("Content-Type","application/json");
    return this.http
      .post("/api/buyBook",JSON.stringify(buyBook),{headers:headers})
      .toPromise()
      .then((response =>{
          console.log(response.json());
          return response.json() as BuyBook;
        })
      )
      .catch(this.handleError);
  }
  deleteBook(bookId: number) {
    return this.http
      .delete("http://localhost:8080/api/book/" + bookId)
      .toPromise()
      .then((response => {
        return response.status
      }))
  }
  updateBook(bookId:number,book:Book){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log(book);
    return this.http
      .put("http://localhost:8080/api/book/" + bookId,JSON.stringify(book),{headers:headers})
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }
  createBook(book:Book){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:8080/api/book",JSON.stringify(book),{headers:headers})
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
