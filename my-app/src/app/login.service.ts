import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {AppComponent} from "./app.component";
import {User} from "./user";
import {LoginLog} from "./loginLog";
import {DataService} from "./data.service";

@Injectable()
export class LoginService{
  connected:String=this.dataService.connected;
  constructor(private http:Http,private dataService:DataService ){}

  login(username:String,password:String):Promise<LoginLog>{
    return this.http
      .get("api/user/login/"+username+"/"+password)
      .toPromise()
      .then((response)=>{
          if(response.status==401){
            return null;
          }else{
            this.dataService.connected="true";
            console.log(this.dataService.connected);
            return response.json() as LoginLog;
          }

        }
      )
  }
}
