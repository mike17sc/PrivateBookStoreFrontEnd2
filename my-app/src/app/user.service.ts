import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{Book} from'./book';
import {User} from "./user";


@Injectable()
export class UserService {
  constructor(private http: Http) {
  }
  getUserss():Promise<Array<User>>{
    return this.http
      .get("/api/user")
      .toPromise()
      .then((response =>{
        console.log(response.json());
        return response.json() as User[];
      })
      )
      .catch(this.handleError);
  }
  newUser(user:User):Promise<User>{
    const headers=new Headers();
    headers.append("Content-Type","application/json");
    return this.http
      .post("/api/user",JSON.stringify(user),{headers:headers})
      .toPromise()
      .then((response =>{
          console.log(response.json());
          return response.json() as User;
        })
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
