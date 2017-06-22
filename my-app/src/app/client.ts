export class Client{
  id:number;
  username:string;
  password:string;
  name:string;
  address:string;
  email:string;
  userType:string;
  constructor(username:string,password:string,name:string,address:string,email:string){
    this.username=username;
    this.password=password;
    this.name=name;
    this.address=address;
    this.email=email
    this.userType="Client";
  }
}
