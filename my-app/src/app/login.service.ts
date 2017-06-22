import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {AppComponent} from "./app.component";
import {LoginLog} from "./loginLog";
import {Client} from "./client";
import {Admin} from "./admin";

@Injectable()
export class LoginService {
  constructor(private http: Http) {
  }

  login(username: String, password: String): Promise<LoginLog> {
    return this.http
      .get("api/user/login/" + username + "/" + password)
      .toPromise()
      .then((response) => {
          if (response.status == 401) {
            return null;
          } else {
            return response.json();
          }

        }
      )
  }
  auditLog():Promise<Array<Array<Object>>>{
    return this.http
      .get("api/loginLog/totalDuration")
      .toPromise()
      .then((response) => {
          if (response.status == 401) {
            return null;
          } else {
            console.log(response);
            return response.json();
          }

        }
      )
  }

}
