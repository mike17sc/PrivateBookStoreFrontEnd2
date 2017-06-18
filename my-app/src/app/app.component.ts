import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="connected =='false' else client">
      <login (changeEvent)="connected=$event"></login>
    </div>
    <ng-template #client>
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
  constructor() {
  }

  public connected: String = "false";
  userType: string = "client";
  title = 'app';
}
