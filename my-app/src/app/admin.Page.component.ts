import{Component, OnInit, Input} from '@angular/core';
import {User} from "./user";
import {AdminService} from "./admin.service";
import {ClientService} from "./client.service";
import {UserService} from "./user.service";
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
  id:number;
  @Input() client:Client;
  @Input() currentUser:User;
  constructor(
    private adminService:AdminService,
    private clientService:ClientService
  ){

  }
  ngOnInit():void{
    this.adminService.getAdmins()
      .then(admins=>this.admins=admins);
    this.clientService.getClients()
      .then(clients=>this.clients=clients);
  }
  deleteAdmin(userId:number){
    this.adminService.deleteAdmin(userId);
    this.ngOnInit();
  }
  deleteClient(userId:number){
    this.clientService.deleteClient(userId)
    this.ngOnInit();
  }
  updateClient(id:number,client:Client){
    this.clientService.updateClient(id,client)
  }
  updateAdmin(id:number,admin:Admin){
    this.adminService.updateAdmin(id,admin)
  }
  createAdmin(username:string,password:string,name:string){
      let admin:Admin=new Admin(username,password,name)
      this.adminService.createAdmin(admin);
      this.ngOnInit();
  }
  createClient(username:string,password:string,name:string,address:string,email:string){
    let client:Client=new Client(username,password,name,address,email);
    this.clientService.createClient(client);
    this.ngOnInit();
  }
}
