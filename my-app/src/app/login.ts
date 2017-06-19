import {Component, Input, EventEmitter, Output} from '@angular/core';
import {LoginService} from "./login.service";
import {LoginLog} from "./loginLog";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService) {
  }

  loginLog: LoginLog;
  @Output() changeEvent = new EventEmitter();

  onChange(value: String, loginLog: LoginLog) {
    this.changeEvent.emit({value: value, loginLog: loginLog});
  }

  login(username: string, password: string) {
    this.loginService.login(username, password)
      .then(loginlog => this.loginLog = loginlog);
    if (this.loginLog != null) {
      this.onChange("true", this.loginLog);
      console.log(this.loginLog);
    }
  }
}
