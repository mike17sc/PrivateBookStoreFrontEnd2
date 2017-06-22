export class Admin{
  id:number;
  username:string;
  password:string;
  name:string;
  userType:string;
  constructor(username:string,password:string,name:string){
    this.username=username;
    this.password=password;
    this.name=name;
    this.userType="Admin";
  }
}
