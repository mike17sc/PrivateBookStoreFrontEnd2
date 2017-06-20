import{Component, OnInit, Input} from '@angular/core';
import {User} from "./user";

@Component({
  selector:'admin',
  templateUrl:'./admin.page.component.html',
  styleUrls:['./admin.page.component.css']
})
export class AdminPageComponent implements OnInit{
  @Input() currentUser:User;
  constructor(
  ){

  }
  ngOnInit():void{
  }
}
