import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Access} from "../models/access";

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private apiurl = 'http://localhost:8080/accesses';
  private httpOptions = {
    observe: 'response' as 'response',
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<HttpResponse<Access[]>> {
    return this.httpClient.get<Access[]>(this.apiurl, this.httpOptions);
  }

}
