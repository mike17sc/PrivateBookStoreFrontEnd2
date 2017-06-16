import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {AppComponent} from "./app.component";
import {User} from "./user";
import {LoginLog} from "./loginLog";

@Injectable()
export class LoginService{
  constructor(private http:Http){}

  login(username:String,password:String):Promise<LoginLog>{
    return this.http
      .get("api/user/login/"+username+"/"+password)
      .toPromise()
      .then((response)=>{
          if(response.status=401){

          }else{
            return response.json() as LoginLog;
          }

        }
      )
  }
}
