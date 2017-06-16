import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {LoginLog} from "./loginLog";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginLog:LoginLog=new LoginLog();
  constructor(
    private loginService:LoginService
  ){}
  login(username:string,password:string){
      this.loginService.login(username,password)
        .then(loginlog => this.loginLog=loginlog);
  }
}
