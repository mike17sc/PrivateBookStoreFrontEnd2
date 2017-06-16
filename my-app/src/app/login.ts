import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {LoginLog} from "./loginLog";
import {DataService} from "./data.service";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginLog:LoginLog=new LoginLog();
  constructor(
    private loginService:LoginService,
    private dataService:DataService
  ){}
  login(username:string,password:string){
      this.loginService.login(username,password)
        .then(loginlog => this.loginLog=loginlog);
    console.log(this.dataService.connected);
  }
}
