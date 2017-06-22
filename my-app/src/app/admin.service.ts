import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{Book} from'./book';
import {Admin} from "./admin";


@Injectable()
export class AdminService {
  constructor(private http: Http) {
  }

  getAdmins(): Promise<Array<Admin>> {
    return this.http
      .get("/api/admin")
      .toPromise()
      .then((response => {
          console.log(response.json());
          return response.json() as Admin[];
        })
      )
      .catch(this.handleError);
  }

  newAdmin(admin: Admin): Promise<Admin> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("/api/admin", JSON.stringify(admin), {headers: headers})
      .toPromise()
      .then((response => {
          console.log(response.json());
          return response.json() as Admin;
        })
      )
      .catch(this.handleError);
  }

  deleteAdmin(adminId: number) {
    return this.http
      .delete("http://localhost:8080/api/admin/" + adminId)
      .toPromise()
      .then((response => {
        return response.status
      }))
  }
  updateAdmin(adminId:number,admin:Admin){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log(admin);
    return this.http
      .put("http://localhost:8080/api/admin/" + adminId,JSON.stringify(admin),{headers:headers})
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }
  createAdmin(admin:Admin){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:8080/api/admin",JSON.stringify(admin),{headers:headers})
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
