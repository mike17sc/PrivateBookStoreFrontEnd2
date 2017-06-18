import {User} from "./user";
export class LoginLog{
  id:number;
  user:User;
  logon:Date;
  logout:Date;
  duration:number;
}
