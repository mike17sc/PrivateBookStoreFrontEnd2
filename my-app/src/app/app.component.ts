import {Component, Input} from '@angular/core';
import {User} from "./user";
import {LoginLog} from "./loginLog";

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="connected !='true' else client">
      <login (changeEvent)="connected=$event.value"(changeEvent)="loginLog=$event.loginLog"(changeEvent)="userType=$event.loginLog.user.userType"></login>
    </div>
    <ng-template #client>
        <div *ngIf="userType == 'Client';else admin">
           <store></store> 
        </div>
        <ng-template #admin>
           test3
           {{loginLog.id}}
           {{connected}}
        </ng-template>
    </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  public connected:String;
  userType: string;
  loginLog:LoginLog;
  title = 'app';
}
