import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Access} from "../models/access";

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  // 643611153022-8eq0reu9vioi50rfuf6k0bjmjl5r1j06.apps.googleusercontent.com
  // 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
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

  public getAllByUser(user: string): Observable<HttpResponse<Access[]>> {
    const url = `${this.apiurl}/user/${user}`;
    return this.httpClient.get<Access[]>(url, this.httpOptions);
  }

}
