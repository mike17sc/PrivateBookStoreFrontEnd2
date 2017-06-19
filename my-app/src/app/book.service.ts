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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
