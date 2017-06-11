import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import{Book} from'./book';
import {promise} from "selenium-webdriver";

@Injectable()
export class BookService {
  constructor(private http: Http) {
  }
  getBooks():Promise<Array<Book>>{
    return this.http
      .get("/api/book")
      .toPromise()
      .then((response =>{
        return response.json().data as Book[];
      })
      )
  }
}
