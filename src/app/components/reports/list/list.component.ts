import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {Report} from "../../../models/report";
import {ReportService} from "../../../services/report.service";
import {UserService} from "../../../services/user.service";
import {DepartmentService} from "../../../services/department.service";
import {Department} from "../../../models/department";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: User[] | null = [];
  public departments: Department[] | null = [];
  public reports: Report[] = [
    {id: 1, name: 'Marcaje de empleados por departamento'},
    {id: 2, name: 'Marcaje de empleados general'},
    {id: 3, name: 'Marcaje de empleado individual'},
    {id: 4, name: 'Empleados que marcaron fuera de tiempo'},
    {id: 5, name: 'Empleados que marcaron fuera de tiempo de salida'},
  ];

  public type = "PDF";
  public report = "";
  public user = "";
  public department = "";

  constructor(private reportService: ReportService,
              private userService: UserService,
              private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      this.users = res.body;
    });

    this.departmentService.getAll().subscribe(res => {
      this.departments = res;
    });
  }

  public generate() {

    this.reportService.getReport(this.type, this.report, this.user, this.department)
      .subscribe(resp => {
        const fileURL = URL.createObjectURL(resp);
        const anchor = document.createElement("a");
        anchor.download = "reporte.pdf";
        anchor.href = fileURL;
        anchor.click();
      });
  }

}
