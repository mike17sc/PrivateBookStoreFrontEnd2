import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="connected =='false' else logedIn">
      <login></login>
      {{connected}}
    </div>
    <ng-template #logedIn>
        <div *ngIf="userType == 'client';else admin">
           <store></store>   
        </div>
        <ng-template #admin>
           test3 
        </ng-template>
    </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService){}
  connected=this.dataService.connected;
  userType:string="client";
  title = 'app';
}
