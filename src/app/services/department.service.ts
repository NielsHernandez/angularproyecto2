import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";
import {Department} from "../models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiurl = 'http://localhost:8080/departments';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.apiurl, this.httpOptions);
  }

}
