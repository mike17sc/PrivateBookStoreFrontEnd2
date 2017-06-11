import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="connected == 'false'; else logedIn">
      <login></login>
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
  connected:string='false';
  userType:string="client";
  title = 'app';
}
