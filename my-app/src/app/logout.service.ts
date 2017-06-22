import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {LoginLog} from "./loginLog";

@Injectable()
export class LogoutService {
  constructor(private http: Http) {
  }
  logout(id:number): Promise<LoginLog> {
    return this.http
      .get("api/user/logout/" + id)
      .toPromise()
      .then((response) => {
          if (response.status != 200) {
            return null;
          } else {
            return response.json();
          }

        }
      )
  }
}
