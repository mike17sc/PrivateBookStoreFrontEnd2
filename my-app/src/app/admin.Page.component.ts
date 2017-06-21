import{Component, OnInit, Input} from '@angular/core';
import {User} from "./user";
import {AdminService} from "./admin.service";
import {ClientService} from "./client.service";
import {Admin} from "./admin";
import {Client} from "./client";

@Component({
  selector:'admin',
  templateUrl:'./admin.page.component.html',
  styleUrls:['./admin.page.component.css']
})
export class AdminPageComponent implements OnInit{
  admins:Admin[];
  clients:Client[];
  @Input() currentUser:User;
  constructor(
    private adminService:AdminService
  ){

  }
  ngOnInit():void{
    this.adminService.getAdmins()
      .then(admins=>this.admins=admins)
  }
  deleteAdmin(userId:number){
    this.adminService.deleteAdmin(userId);
  }
}
