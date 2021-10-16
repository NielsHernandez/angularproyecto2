import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiurl = 'http://localhost:8080/roles';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<HttpResponse<Role[]>> {
    return this.httpClient.get<HttpResponse<Role[]>>(this.apiurl, this.httpOptions);
  }

}
