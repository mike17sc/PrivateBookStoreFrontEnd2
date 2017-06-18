import {Component, Input, EventEmitter, Output} from '@angular/core';
import {LoginService} from "./login.service";
import {LoginLog} from "./loginLog";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
    constructor(
    private loginService:LoginService
  ){}
  loginLog:LoginLog=new LoginLog();
  @Output()
  changeEvent=new EventEmitter<String>();
  onChange(value:String){
    this.changeEvent.emit(value);
  }
  login(username:string,password:string){
      this.loginService.login(username,password)
        .then(loginlog => this.loginLog=loginlog);
      if (this.loginLog!=null){
        this.onChange("true");
      }
  }
}
