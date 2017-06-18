import {User} from "./client";
export class LoginLog{
  id:number;
  user:User;
  logon:Date;
  logout:Date;
  duration:number;
}
