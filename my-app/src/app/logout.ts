import {Component, Input, EventEmitter, Output} from '@angular/core';
import {LoginLog} from "./loginLog";
import {LogoutService} from "./logout.service";

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['./logout.css']
})
export class LogoutComponent {
  constructor(private logoutService: LogoutService) {
  }
  @Input() loginLog: LoginLog;
  @Output()
  changeEvent = new EventEmitter();

  onChange(value: String, loginLog: LoginLog) {
    this.changeEvent.emit({value: value, loginLog: loginLog});
  }



  logout() {
    this.logoutService.logout(this.loginLog.id)
      .then(loginlog => this.loginLog = loginlog);
    if (this.loginLog != null) {
      this.onChange("false", null);
      console.log(this.loginLog);
    }
  }

}
