import{Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import{Book} from'./book';
import {Client} from "./client";


@Injectable()
export class ClientService {
  constructor(private http: Http) {
  }

  getClients(): Promise<Array<Client>> {
    return this.http
      .get("/api/client")
      .toPromise()
      .then((response => {
          console.log(response.json());
          return response.json() as Client[];
        })
      )
      .catch(this.handleError);
  }

  bestClient(): Promise<Client> {
    return this.http
      .get("/api/buyBook/bestBuyer")
      .toPromise()
      .then((response => {
          console.log(response.json());
          return response.json() as Client;
        })
      )
      .catch(this.handleError);
  }

  newClient(client: Client): Promise<Client> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("/api/client", JSON.stringify(client), {headers: headers})
      .toPromise()
      .then((response => {
          console.log(response.json());
          return response.json() as Client;
        })
      )
      .catch(this.handleError);
  }

  deleteClient(clientId: number) {
    return this.http
      .delete("http://localhost:8080/api/client/" + clientId)
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }

  updateClient(clientId: number, client: Client) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log(client);
    return this.http
      .put("http://localhost:8080/api/client/" + clientId, JSON.stringify(client), {headers: headers})
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

  createClient(client: Client) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:8080/api/client", JSON.stringify(client), {headers: headers})
      .toPromise()
      .then((response => {
        console.log(response.status)
        return response.status
      }))
  }
}
