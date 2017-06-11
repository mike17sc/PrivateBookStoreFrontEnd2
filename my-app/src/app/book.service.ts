import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{Book} from'./book';


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
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
