import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Login} from "../models/login";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiurl = 'http://localhost:8080/reports/download';
  private httpOptions = {
    observe: 'response' as 'response',
    responseType: 'blob' as 'blob',
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getReport(type: string, report: string, user?: string, department?: string) {
    let url = `${this.apiurl}?type=${type}&report=${report}`;
    url += (user != "") ? `&EMPLOYEE_ID=${user}` : '';
    url += (department != "") ? `&DEPARTMENT_ID=${department}` : '';

    const typeFile = 'application/pdf';
    return this.httpClient.get(url, this.httpOptions).pipe(
      map((res: any) => {
        return new Blob([res.body], {type: typeFile});
      })
    );
  }

}
