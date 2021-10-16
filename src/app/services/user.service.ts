import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = 'http://localhost:8080/users';
  private httpOptions = {
    observe: 'response' as 'response',
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<HttpResponse<User[]>> {
    return this.httpClient.get<User[]>(this.apiurl, this.httpOptions);
  }

  public create(user: User) {
    return this.httpClient.post(this.apiurl, JSON.stringify(user), this.httpOptions);
  }

}
