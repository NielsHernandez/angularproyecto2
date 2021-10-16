import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiurl = 'http://localhost:8080/login';
  private httpOptions = {
    observe: 'response' as 'response',
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public login(login: Login) {
    return this.httpClient.post(this.apiurl, JSON.stringify(login), this.httpOptions);
  }

}
